"use client";

import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import toast from "react-hot-toast";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";

function RenameModal() {
  const { user } = useUser();
  const [input, setInput] = useState("");
  const { isRenameModalOpen, setIsRenameModalOpen, fileId, filename } =
    useAppStore();

  const renameFile = async () => {
    if (!user || !fileId) return;

    const toastId = toast.loading("Renaming file...");

    try {
      await updateDoc(doc(db, "users", user.id, "files", fileId), {
        filename: input,
      })
        .then(() => {
          toast.success("File renamed successfully!", { id: toastId });
        })
        .finally(() => {
          setInput("");
          setIsRenameModalOpen(false);
        });
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId });
    }
  };
  return (
    <Dialog
      open={isRenameModalOpen}
      onOpenChange={(isOpen) => {
        setIsRenameModalOpen(isOpen);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="pb-2">Rename the file</DialogTitle>
        </DialogHeader>
        <div className="flex justify-end space-x-2 py-3">
          <Input
            id="link"
            defaultValue={filename}
            onChange={(e) => setInput(e.target.value)}
            onKeyDownCapture={(e) => {
              if (e.key === "Enter") {
                renameFile();
              }
            }}
          />
          <Button
            size={"sm"}
            className="px-3"
            variant={"secondary"}
            onClick={() => setIsRenameModalOpen(false)}
          >
            <span className="sr-only">Cancel</span>
            <span>Cancel</span>
          </Button>

          <Button
            type="submit"
            size={"sm"}
            className="px-3"
            onClick={() => renameFile()}
          >
            <span className="sr-only">Rename</span>
            <span>Rename</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default RenameModal;

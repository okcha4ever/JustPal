import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WithAI from "./WithAI";

const AddStory = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="w-full rounded-xl bg-green-500 px-3 py-2 text-center text-white">
          Add Story
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="space-y-5">
            <DialogTitle className="text-center">Choose Your Way!</DialogTitle>
            <DialogDescription className="flex w-full items-center justify-center">
              <Tabs
                defaultValue="account"
                className="flex h-full flex-col items-center justify-center"
              >
                <TabsList className="gap-5">
                  <TabsTrigger value="with-ai">With AI</TabsTrigger>
                  <TabsTrigger value="manual">Manual</TabsTrigger>
                </TabsList>
                {/* WIth AI tab */}
                <TabsContent value="with-ai">
                  <WithAI />
                </TabsContent>

                {/* Manual tab */}
                <TabsContent value="manual">
                  Change your password here.
                </TabsContent>
              </Tabs>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddStory;

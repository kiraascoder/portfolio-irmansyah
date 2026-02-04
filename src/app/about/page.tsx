import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from "lucide-react";

export default function Project() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="container border mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-6">A</div>
          <div className="col-span-6">G</div>
        </div>
        <div className="flex min-h-svh flex-col items-center justify-center">
            <Button variant="secondary" size="icon" className="size-8">
                <ChevronRightIcon />
            </Button>
        </div>
      </div>
    </div>
  );
}

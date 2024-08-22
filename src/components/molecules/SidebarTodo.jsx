import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import InputFieldTextAreaWithLabel from "./InputFieldTextAreaWithLabel";
import InputFieldTextWithLabel from "./InputFieldTextWithLabel";

const SidebarTodo = ({ todo }) => {

    return (
        <Sheet>
            <SheetTrigger asChild >
                <Button variant="outline">
                    View
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader className="border-b">
                    <SheetTitle>
                        Todo Details
                    </SheetTitle>
                </SheetHeader>
                <div className="flex  items-start p-4 h-[calc(100%-120px)] gap-4 flex-col w-full">
                    <InputFieldTextWithLabel
                        label={"Title"}
                        id={"title"}
                        value={todo.title}
                        placeholder={"Todo Title"}
                        disabled
                    />
                    <InputFieldTextAreaWithLabel
                        label={"Description"}
                        id={"description"}
                        value={todo.description}
                        placeholder={"Todo Description"}
                        className={"flex flex-col flex-1"}
                        disabled
                    />
                </div>
                <SheetFooter>
                    <SheetClose
                        asChild
                        className="w-full"
                    >
                        <Button
                            type="reset"
                            variant="secondary"
                        >
                            Cancel
                        </Button>
                    </SheetClose>
                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Save changes
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default SidebarTodo

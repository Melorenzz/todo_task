import type {Todo} from "./Todo.ts";
import * as React from "react";

export interface IAccordion {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    data: Todo[];
    setData: React.Dispatch<React.SetStateAction<Todo[]>>;
}
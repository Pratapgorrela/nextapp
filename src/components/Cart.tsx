"use client";

import { ShoppingCart } from "lucide-react";
import { Sheet, SheetTrigger } from "./ui/sheet";

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCart className="w-6 h-6 flex-shrink-0 " />
      </SheetTrigger>
    </Sheet>
  );
};

export default Cart;

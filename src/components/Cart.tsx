"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Cart = () => {
  const itemCount = 0;
  const fee = 1;

  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart
          aria-hidden="true"
          className="w-6 h-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 "
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {itemCount}
        </span>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart({itemCount})</SheetTitle>
        </SheetHeader>
        {itemCount ? (
          <>
            <div className="flex flex-col w-full pr-6">
              {/* TODO: Cart logic */}
              Cart Items
            </div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span>${fee}.00</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>${fee}.00</span>
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href="./cart"
                    className={buttonVariants({ className: "w-full" })}
                  >
                    Continue to Checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full space-y-1">
            <div
              aria-hidden="true"
              className="relaive mb-4 w-60 h-60 text-muted-foreground"
            >
              <Image
                src="/hippo-empty-cart.png"
                fill
                alt="empty shopping cart hippo image"
                className="!relative"
              />
            </div>
            <div className="text-xl font-semibold">Your cart is empty!</div>
            <SheetTrigger asChild>
              <Link
                href="./products"
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                  className: "text-sm text-muted-foreground",
                })}
              >
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;

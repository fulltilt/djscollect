"use client";

import { Cart } from "@/app/api/shopify/types";
import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, useState } from "react";
import CartSheet from "./cart/CartSheet";
import { addItem } from "./actions";

export function Nav() {
  // const [showSheet, setShowSheet] = useState(false);
  // let cart = await addItem(undefined);
  // console.log(cart);
  // let quantity = 0;
  // if (cart) quantity = cart.lines.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <>
      <nav className="bg-primary text-primary-foreground flex px-4 justify-between items-center">
        <div className="m-4">
          <NavLink href="/">DeeJays Collectibles</NavLink>
          <NavLink href="/products">Products</NavLink>
          {/* <NavLink href="/orders">My Orders</NavLink> */}
        </div>
        <div className="m-4">
          <Link href="/purchase">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-white transition-colors dark:border-neutral-700 dark:text-white">
              <ShoppingCart className="h-4 transition-all ease-in-out hover:scale-110" />
              {/* {quantity ? (
              <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded-lg bg-blue-600 text-[11px] font-medium text-white pl-1">
                {quantity}
              </div>
            ) : null} */}
            </div>
          </Link>
        </div>
      </nav>
      {/* {cart && (
        <CartSheet
          showSheet={showSheet}
          setShowSheet={setShowSheet}
          cart={cart}
          setCart={setCart}
        />
      )} */}
    </>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground",
        pathname === props.href && "bg-background text-foreground"
      )}
    />
  );
}

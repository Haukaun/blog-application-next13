import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

declare global {
  interface Window {
    my_modal_4: any;
  }
}

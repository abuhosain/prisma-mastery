import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //  find all
  const getAllFromDB = await prisma.post.findMany();
  // find first and throw
  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });

  // find unique and find or throw erro
  const findUnique = await prisma.post.findUniqueOrThrow({
    where : {
      id : 40
    }
  })

  console.log("findFirst", { findUnique });
};

main();

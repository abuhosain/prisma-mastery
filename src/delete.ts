import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteData = async () => {
  //   const singleDelete = await prisma.post.delete({
  //     where: {
  //       id: 9,
  //     },
  //   });

  //   delete many by condition
  const deleteMany = await prisma.post.deleteMany({
    where: {
      published: false,
    },
  });

  const deleteAll = await prisma.post.deleteMany();

  console.log(deleteAll);
  console.log(deleteMany);
};

deleteData();

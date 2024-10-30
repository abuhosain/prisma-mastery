import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  //   //    ofset pagination
  //   const offsetData = await prisma.post.findMany({
  //     skip: 5,
  //     take: 3,
  //   });

  //   console.log("offset pagintion data", offsetData);

  //    cursor pagination
  //   const cursorPagination = await prisma.post.findMany({
  //     skip: 5,
  //     take: 3,
  //     cursor: {
  //       id: 22,
  //     },
  //   });

  //   console.log("cursor pagintion data", cursorPagination);
  const sortedData = await prisma.post.findMany({
    orderBy: {
      title: "asc",
    },
  });

  console.log(sortedData);
};
paginationSorting();

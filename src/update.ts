import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  // const singleUpdates = await prisma.post.update({
  //     where : {
  //         id : 14
  //     },
  //     data : {
  //         title : "title 5",
  //         // content : "content 4",
  //         // authorName : "Author 4"
  //     }
  // });

  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       title: "this is title",
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });

  //   console.log(updateMany);

  const upsertDaata = await prisma.post.upsert({
    where: {
      id: 2,
    },
    update: {
      authorName: "Abu Hosain",
    },
    create: {
      title: "title 2",
      content: "content 1",
    },
  });

  console.log(upsertDaata);
};

updates();

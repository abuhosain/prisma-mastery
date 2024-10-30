import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // creat data into db
  // const result = await prisma.post.create({
  //     data : {
  //         title : "this is title",
  //         content : "this is content",
  //         authorName : "Fahim ahmed "
  //     }
  // });
  // console.log(result)
  // const getAllFromDB = await prisma.post.findMany();
  // console.log(getAllFromDB);
  // create many
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "this is title 1",
        content: "this is content 1",
        authorName: "author 1 ",
      },
      {
        title: "this is title 2",
        content: "this is content 2",
        authorName: "author 2 ",
      },
      {
        title: "this is title 3",
        content: "this is content 3",
        authorName: "author 3",
      },
    ],
  });

  console.log(createMany);
};

main();

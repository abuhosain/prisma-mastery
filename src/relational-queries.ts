import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  // fluent api
  const result = await prisma.user
    .findUnique({
      where: {
        id: 2,
      },
    })
    .post();

  // relational filters
  const publishedPostUsers = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });

  // console.log(publishedPostUsers);
  console.dir(publishedPostUsers, { depth: Infinity });
};

relationalQueries();

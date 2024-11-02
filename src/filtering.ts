import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "title",
          },
        },
      ],
    },
  });

  const startsWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "user1",
      },
    },
  });

  const endWith = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "com",
      },
    },
  });

  const userNameArray = ["user1", "user4", "user3"];

  const userNameByArray = await prisma.user.findMany({
    where: {
      username: {
        in: userNameArray,
      },
    },
  });

  const inDeptch = await prisma.user.findMany({
    where: {
      id: 1,
    },
    include: {
      post: {
        include: {
          PostCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });

  console.dir(inDeptch, { depth: Infinity });
};
filtering();

import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // create user
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "user2",
  //     email: "user2@gmail.com",
  //     role: UserRole.user,
  //   },
  // });

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "this is user bio",
  //     userId: 1,
  //   },
  // });

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "software engineering",
  //   },
  // });

  const createPost = await prisma.post.create({
    data: {
      title: "This is title",
      content: "This is content",
      authorId: 1,
      PostCategory: {
        create: {
          categoryId: 3,
          // category: {
          //   connect: {
          //     id: 1,
          //   },
          // },
        },
      },
    },
    include: {
      PostCategory: true,
    },
  });

  console.log(createPost);
};

main();

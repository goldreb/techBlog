const { Post } = require("../models");

//Post seeds for the database
const postdata = [
  {
    title: "TeachBlogs",
    post_url: "https://teachblogs.com/",
    context: "we teach to each",
    user_id: 1,
  },

  {
    title: "scholastic",
    post_url:
      "https://www.scholastic.com/teachers/articles/teaching-content/top-teacher-blogs/",
    context: "Blogs that have taught us a few things",
    user_id: 2,
  },

  {
    title: "What is teachable",
    post_url: "https://teachable.com/",
    context: "share what you know",
    user_id: 3,
  },

  {
    title: "teacher blog post",
    post_url: "https://blog.feedspot.com/teacher_blogs/",
    context:
      "Doing blogger outreach or influencer marketing and want to connect with new influencers in niche markets? Improve your outreach by connecting with authority bloggers in your domain area.",
    user_id: 4,
  },
];

const postSeeds = () => Post.bulkCreate(postdata);

module.exports = postSeeds;

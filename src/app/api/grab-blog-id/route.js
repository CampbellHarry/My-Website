import { createClient } from 'contentful';

const client = createClient({
  space: process.env.SPACE,
  environment: 'master',
  accessToken: process.env.ACCESS_TOKEN,
});

// The route handler
export async function GET(req) {
  try {
    // Get the blogId from the query parameters
    const { searchParams } = new URL(req.url);
    const blogId = searchParams.get('blogid'); // use _blogid as per your fetch request

    console.log('Requested blogId:', blogId);

    // Fetch multiple entries from Contentful
    const entries = await client.getEntries({
      content_type: 'blogPage',
    });

    // Log all blognum values for debugging
    console.log('All blognum values:', entries.items.map(entry => entry.fields.blognum));

    // Find the blog entry with the matching blognum (convert both to strings for comparison)
    const blogIndex = entries.items.findIndex(entry => String(entry.fields.blognum) === String(blogId));
    let blog;
    if (blogIndex !== -1) {
      [blog] = entries.items.splice(blogIndex, 1);
    }

    // If no blog is found, return a 404 error
    if (!blog) {
      return new Response(JSON.stringify({ error: 'Blog not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Process the blog content
    const content = blog.fields.body.content.map(item => {
      if (item.nodeType === 'paragraph') {
        return item.content.map(subItem => subItem.value).join(' ');
      }
      return '';
    }).join('\n');

    // Structure the blog data
    const blogData = {
      title: blog.fields.title,
      body: content,
      created: blog.sys.createdAt,
      type: blog.fields.type.type,
      techstack: blog.fields.type.techstack,
      number: blog.fields.blognum,
      author: blog.fields.type.author,
    };

    // Return the blog data as JSON
    return new Response(JSON.stringify(blogData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to fetch data from Contentful' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

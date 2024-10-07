import { createClient } from 'contentful';

const client = createClient({
    space: process.env.SPACE,
    environment: 'master',
    accessToken: process.env.ACCESS_TOKEN,
});

// The route handler
export async function GET(req) {
  try {
    // Fetch multiple entries from Contentful
    const entries = await client.getEntries({
      content_type: 'blogPage', 
    });

    const blogData = entries.items.map(entry => {
      const content = entry.fields.body.content.map(item => {
        if (item.nodeType === 'paragraph') {
          return item.content.map(subItem => subItem.value).join(' ');
        }
        return '';
      }).join('\n');

      return {
        title: entry.fields.title,
        body: content,
        created: entry.sys.createdAt,
        type: entry.fields.type.type,
        techstack: entry.fields.type.techstack,
        number: entry.fields.blognum,
      };
    });

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

import { NextResponse } from "next/server";

// To handle a GET request to /api
export function GET() {
  // Do whatever you want
  return NextResponse.json([
   {
      name: 'Xintent',
      route: '/xintent',
      image: 'xintent',
      banner: '/github.png',
      earning: '$0k/mo',
      des: 'Simplify Your Tweets!  Generate custom Twitter links with prewritten text. '
    },

    {
      name: 'CodeBrew',
      route: '/',
      image: 'codebrew',
      earning: '$0/mo',
      banner: '/github.png',
      des: 'Code Brew - Byte size news from Wall Street to Silicon Valley.'
    },

    {
      name: 'SCOOP',
      route: 'History Clips',
      image: 'scoop',
      earning: '$null/mo',
      banner: '/youtube.png',
      des: 'Scoop - Your local hub for everything nearby.'
    },

  ], { status: 200 });
}
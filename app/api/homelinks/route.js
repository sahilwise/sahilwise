import { NextResponse } from "next/server";

// To handle a GET request to /api
export function GET() {
  // Do whatever you want
  return NextResponse.json([

    {
      name: 'History Clip - Youtube',
      route: '/products/gitsauce',
      image: 'https://www.salnet.xyz/github.png',
      earning: '$null/mo',
      des: 'Scoop - Your local hub for everything nearby.'
    },

    {
        name: 'Salnetx - Youtube',
        route: '/products/gitsauce',
        image: 'https://www.salnet.xyz/github.png',
        earning: '$null/mo',
        des: 'Scoop - Your local hub for everything nearby.'
    },
    {
      name: 'Shlshts - Instagram',
      route: '/products/gitsauce',
      image: 'https://www.salnet.xyz/github.png',
      earning: '$null/mo',
      des: 'Scoop - Your local hub for everything nearby.'
    },

  ], { status: 200 });
}

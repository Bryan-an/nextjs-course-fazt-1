import { NextResponse } from 'next/server';

export const GET = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return NextResponse.json({ users: data });
};

export const POST = async (request) => {
  const { name, lastName } = await request.json();
  console.log(name, lastName);

  return NextResponse.json({ message: 'create data!' });
};

export const PUT = () => {
  return NextResponse.json({ message: 'update data!' });
};

export const DELETE = () => {
  return NextResponse.json({ message: 'delete data!' });
};

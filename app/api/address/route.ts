import {db, sql} from '@vercel/postgres';
import {NextResponse} from "next/server";

const dataSource = "https://jsonplaceholder.typicode.com/todos"

export const GET = async (request: Request) => {
    // const res = await fetch(dataSource)
    // const todos: ITodo[] = await res.json()
    //
    // return NextResponse.json({
    //     status: 200,
    //     data: todos
    // }, {
    //     status: 200
    // })
    // const address = await sql`SELECT * FROM Address`
    const client = await db.connect();

    try {
        const address = await client.sql`SELECT * FROM address`;
        return NextResponse.json({address}, {status: 200});
    }
    catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}

export const POST = async () => {
    const client = await db.connect();
    try {
        const address = await client.sql`INSERT INTO address (Name, Slug, Address, Views, Shares, Content) VALUES ("Ruộng bậc thang","ruong-bac-thang","SaPa",200, 50, "Mùa hè lý tưởng ở Hạ Long - Top 5 hoạt động trải nghiệm được yêu thích nhất");`;
        return NextResponse.json({address}, {status: 200});
    }
    catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}

export const DELETE = async () => {
    const client = await db.connect();
    try {
        const deleteAddress = await client.sql`DELETE FROM address`
        NextResponse.json({deleteAddress}, {status: 200});
    } catch (error){
        NextResponse.json({error}, {status: 500});
    }
}
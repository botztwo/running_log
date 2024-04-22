import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { redirect, useSearchParams } from 'next/navigation'


export function middleware(request: Request) {
    // const urlSearchParams = useSearchParams();
    // const codeValue = urlSearchParams.get('code');
    // console.log(codeValue);
    //console.log(request.cookies.getAll())
    console.log('middleware');
    console.log(request.method)
    console.log(request.url)
    

    //redirect("https://www.strava.com/oauth/authorize?client_id=112421&redirect_uri=http://localhost:3000&response_type=code&scope=read")
    //console.log(request.headers)
    return NextResponse.redirect(new URL('/home', request.url))
    //return NextResponse.next()
}

export const config = {
    matcher:"/xx"
}
// matcher:[ '/\\?state=&code=[a-f0-9]{40}&scope=read$',],
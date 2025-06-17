import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { stack } from './lib/constants'
 
export function middleware(request: NextRequest) {;
  let cookie = request.cookies.get('speciality');
  console.log('cookie', cookie);
  const currentSearchParams = request.url;
  console.log('currentSearchParams', currentSearchParams);
  const searchParams = request.nextUrl.searchParams.get('speciality');
  console.log('searchParams', searchParams);

  if (!cookie && searchParams) {
    if (searchParams && stack.has(searchParams)) {
      const response = NextResponse.next();
      response.cookies.set('speciality', searchParams);
  
      cookie = response.cookies.get('speciality');
      console.log(cookie);
      return response;
    }
  }
  
  if (cookie && !searchParams) {
    const url = request.nextUrl.clone();
    url.searchParams.set('speciality', cookie.value);
    return NextResponse.redirect(url);
  }

  const response = NextResponse.next();

  if (searchParams === "" && cookie && cookie.value !== searchParams) {
    response.cookies.delete('speciality');
  }
  
  if (cookie && searchParams && cookie.value !== searchParams) {
    if (searchParams && stack.has(searchParams)) {
      response.cookies.set('speciality', searchParams);
  
      cookie = response.cookies.get('speciality');
      console.log(cookie);
    }
  }
 
  return response;
}
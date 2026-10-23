export function notFound(): never {
  throw new Error("NOT_FOUND");
}
export function usePathname() {
  return "/";
}
export function useRouter() {
  return { push() {}, replace() {} };
}
export function useSearchParams() {
  return new URLSearchParams();
}
export function redirect(): never {
  throw new Error("REDIRECT");
}

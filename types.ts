export type addressType = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
}

export type contactType = {
  id: string,
  name: string,
  email: string,
  address: addressType,
}

export type postType = {
  title: string,
  body: string,
}

export type socialType = {
  map(arg0: ({ id, icon, path }: { id: number; icon: string; path: string }) => JSX.Element): import("react").ReactNode
}


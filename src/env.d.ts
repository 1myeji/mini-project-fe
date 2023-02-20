interface IProduct {
  brand: string;
  detail: string;
  logo: string;
  name: string;
  price: number;
  productId: number;
  rate: number;
}

interface IUserEditPayload {
  oldPassword: string;
  newPassword: string;
  phone: string;
  salary: number;
  job: string;
}

interface IData {
  code: number;
  message: string;
  data: Daum[];
}

interface Daum {
  wishlistId?: number;
  basketId?: number;
  productId: number;
  brand: string;
  logo: string;
  name: string;
  price: number;
  detail: string;
  rate: number;
}

interface IProductId {
  productId: number;
}

interface IBasketId {
  basketId: number;
}

interface IWishListId {
  wishlistId: number;
}

interface IProductsId {
  products_id_list: number[];
}

interface IOrderId {
  orderId: number;
}

interface IOrderData {
  code: number;
  message: string;
  data: Daum[];
}

interface Daum {
  orderId: number;
  purchaseDate: number[];
  purchasedProductList: PurchasedProductList[];
}

interface PurchasedProductList {
  purchasedProductId: number;
  purchasedProductPrice: number;
  purchasedProductBrand: string;
  purchasedProductLogo: string;
  purchasedProductName: string;
  purchasedProductRate: number;
  purchasedProductDetail: string;
  originalProductId: number;
}

interface ILoginInput {
  email: string;
  password: string;
}

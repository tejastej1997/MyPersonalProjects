export interface RootObject {
    productData: ProductData;
}
export interface ProductData {
    productDetails: ProductDetail[];
    designImagePath: DesignImagePath;
}

export interface DesignImagePath {
    desktopImagePath: string;
    mobileImagePath: string;
    previewImagePath: string;
}
export interface ProductDetail {
    image: Image;
    name: string;
    category: string;
    price: number;
    id: number;
    quantity: number;
    isvisible: boolean;
}
export interface Image {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
}
export interface PurchaseProps {
  no: string;
  date: string;
  supplier: string;
  currency: string;
  vat: boolean;
  stocks: ProductStockOfPurchase[];
  materialStocks: MaterialStockOfPurchase[];
}

export class Purchase implements PurchaseProps {
  no: string;
  date: string;
  supplier: string;
  currency: string;
  vat: boolean;
  stocks: ProductStockOfPurchase[];
  materialStocks: MaterialStockOfPurchase[];

  constructor(props: PurchaseProps) {
    Object.assign(this, props);
  }

  changeNo(no: string) {
    return new Purchase({ ...this, no });
  }

  changeDate(date: string) {
    return new Purchase({ ...this, date });
  }

  changeSupplier(supplier: string) {
    return new Purchase({ ...this, supplier });
  }

  changeCurrency(currency: string) {
    return new Purchase({ ...this, currency });
  }

  changeVat(vat: boolean) {
    return new Purchase({ ...this, vat });
  }

  changeStocks(stocks: ProductStockOfPurchase[]) {
    return new Purchase({ ...this, stocks });
  }

  addStock() {
    const stocks = [...this.stocks];
    return new Purchase({ ...this, stocks });
  }

  removeStock(index: number) {
    const stocks = [...this.stocks];
    stocks.splice(index, 1);
    return new Purchase({ ...this, stocks });
  }

  changeMaterialStocks(materialStocks: MaterialStockOfPurchase[]) {
    return new Purchase({ ...this, materialStocks });
  }

  addMaterialStock() {
    const materialStocks = [...this.materialStocks];
    return new Purchase({ ...this, materialStocks });
  }

  removeMaterialStock(index: number) {
    const materialStocks = [...this.materialStocks];
    materialStocks.splice(index, 1);
    return new Purchase({ ...this, materialStocks });
  }
}

export interface StockPropsOfPurchase {
  product: string;
  status: string;
  inputQty: string;
}

export abstract class StockOfPurchase implements StockPropsOfPurchase {
  abstract product: string;
  abstract status: string;
  abstract inputQty: string;
  abstract changeProduct(product: string): StockOfPurchase;
  abstract changeStatus(status: string): StockOfPurchase;
  abstract changeInputQty(inputQty: string): StockOfPurchase;
}

export interface ProductStockPropsOfPurchase extends StockPropsOfPurchase {
  color: string;
  position: string;
  strip: string;
  length: string;
  weight: string;
}

export class ProductStockOfPurchase extends StockOfPurchase implements ProductStockPropsOfPurchase {
  product: string;
  status: string;
  inputQty: string;
  color: string;
  position: string;
  strip: string;
  length: string;
  weight: string;

  constructor(props: ProductStockPropsOfPurchase) {
    super();
    Object.assign(this, props);
  }

  changeProduct(product: string): ProductStockOfPurchase {
    return new ProductStockOfPurchase({ ...this, product });
  }

  changeStatus(status: string): ProductStockOfPurchase {
    return new ProductStockOfPurchase({ ...this, status });
  }

  changeInputQty(inputQty: string): ProductStockOfPurchase {
    return new ProductStockOfPurchase({ ...this, inputQty });
  }

  changeColor(color: string): ProductStockOfPurchase {
    return new ProductStockOfPurchase({ ...this, color });
  }

  changePosition(position: string): ProductStockOfPurchase {
    return new ProductStockOfPurchase({ ...this, position });
  }

  changeStrip(strip: string): ProductStockOfPurchase {
    return new ProductStockOfPurchase({ ...this, strip });
  }

  changeLength(length: string): ProductStockOfPurchase {
    return new ProductStockOfPurchase({ ...this, length });
  }

  changeWeight(weight: string): ProductStockOfPurchase {
    return new ProductStockOfPurchase({ ...this, weight });
  }
}

export interface MaterialStockPropsOfPurchase extends StockPropsOfPurchase {
  outputNo: string;
}

export class MaterialStockOfPurchase extends StockOfPurchase implements MaterialStockPropsOfPurchase {
  outputNo: string;
  product: string;
  status: string;
  inputQty: string;

  constructor(props: MaterialStockPropsOfPurchase) {
    super();
    Object.assign(this, props);
  }

  changeProduct(product: string): MaterialStockOfPurchase {
    return new MaterialStockOfPurchase({ ...this, product });
  }

  changeStatus(status: string): MaterialStockOfPurchase {
    return new MaterialStockOfPurchase({ ...this, status });
  }

  changeInputQty(inputQty: string): MaterialStockOfPurchase {
    return new MaterialStockOfPurchase({ ...this, inputQty });
  }

  changeOutputNo(outputNo: string): MaterialStockOfPurchase {
    return new MaterialStockOfPurchase({ ...this, outputNo });
  }
}

export interface PurchaseOfList {}

export interface PurchaseService {
  createPurchase: (purchase: Purchase) => Promise<any>;
  updatePurchase: (purchase: Purchase) => Promise<any>;
  getPurchase: (id: string) => Promise<Purchase>;
  searchPurchasesOfList: (query: any) => Promise<PurchaseOfList[]>;
}

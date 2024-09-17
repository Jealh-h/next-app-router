export default function Page({ params }: { params: { shopId: string } }) {
  return <div>Shop : {JSON.stringify(params)}</div>;
}

export async function generateStaticParams() {
  const fetch = () => {
    return new Promise<Array<number>>((resolve, reject) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]);
      }, 1000);
    });
  };
  //   const result = await fetch();
  return [{ shopId: "1" }, { shopId: "2" }];
}

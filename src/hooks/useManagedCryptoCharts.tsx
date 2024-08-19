
export default function useManagedCryptoCharts({coinHistory}: any) {
    const coinPrice = [];
    const coinTimestamp = [];
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinPrice.push(coinHistory?.data?.history[i].price);
      coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString());
    }
  
    coinPrice.reverse();
    coinTimestamp.reverse();
    return {
        coinPrice, coinTimestamp
    }
}

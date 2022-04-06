import { ProgressCircle, View } from '@adobe/react-spectrum';
import React, { useEffect, useState } from 'react';
import { useMoralisWeb3Api } from 'react-moralis';
import { useParams } from 'react-router-dom';

function ViewWallet() {
  const [loading, setLoading] = useState(false);
  const [nfts, setNfts] = useState<any>({});

  let params = useParams();
  const Web3Api = useMoralisWeb3Api();
  const options: any = { address: '0x...' };

  const getWalletNFTs = async (value: any) => {
    options.address = value;
    await Web3Api.account
      .getNFTs(options)
      .then(function (nfts) {
        console.log(nfts);
        setNfts(nfts);
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    setLoading(true);
    getWalletNFTs(params.id);
  }, []);

  return (
    <div>
      <View isHidden={loading}>View Wallet</View>
      <ProgressCircle
        isHidden={!loading}
        aria-label="Loading…"
        isIndeterminate
      />
      <pre></pre>
    </div>
  );
}

export default ViewWallet;

import { ProgressCircle, View } from '@adobe/react-spectrum';
import React, { useEffect, useState } from 'react';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';
import { useParams } from 'react-router-dom';
import './ViewWallet.scss';

function ViewWallet() {
  const [loading, setLoading] = useState(true);
  const [nftWalletResult, setNftWalletResult] = useState<any>([]);

  let params = useParams();
  const { isInitialized } = useMoralis();
  const Web3Api = useMoralisWeb3Api();
  const options: any = { address: '0x...' };

  const getWalletNFTs = async (value: any) => {
    options.address = value;
    await Web3Api.account
      .getNFTs(options)
      .then(function (result) {
        setNftWalletResult(result.result);
        console.log(nftWalletResult);

        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    if (isInitialized) {
      getWalletNFTs(params.id);
    }
  }, [isInitialized]);

  return (
    <div className="vsto-view-wallet">
      <View isHidden={loading}>My NFT Collection</View>
      <ProgressCircle
        isHidden={!loading}
        aria-label="Loading…"
        isIndeterminate
      />
      <div className="vsto-view-wallet-collection">
        {nftWalletResult.map((nft: any, index: number) => {
          return (
            <div key={index} className="vsto-view-wallet-collection-image">
              {nft.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ViewWallet;

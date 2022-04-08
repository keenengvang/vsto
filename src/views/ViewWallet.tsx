import { ProgressCircle, View } from '@adobe/react-spectrum';
import React, { useEffect, useState } from 'react';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';
import { useParams } from 'react-router-dom';
import { accountNft, accountNftList } from '../core/interfaces';
import './ViewWallet.scss';

function ViewWallet() {
  const [loading, setLoading] = useState(true);
  const [accountWalletResults, setAccountWalletResults] = useState<
    accountNftList | undefined
  >();

  let params = useParams();
  const { isInitialized } = useMoralis();
  const Web3Api = useMoralisWeb3Api();
  const options: any = { address: '0x...' };

  const getWalletNFTs = async (value: any) => {
    options.address = value;
    await Web3Api.account
      .getNFTs(options)
      .then(function (result) {
        setAccountWalletResults(result);
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error);
      });
  };

  // TODO: Create method to consume image/ipfs/video
  const parseNftImage = (metadata: any) => {
    let nftImage;
    if (metadata.image) {
      nftImage = metadata.image;
    } else if (metadata.image_url) {
      nftImage = metadata.image_url;
    }
    console.log(nftImage);
    return nftImage;
  };

  useEffect(() => {
    // TODO: Check Redux Store and if none then call nfts from wallet
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
        {accountWalletResults?.result &&
          accountWalletResults.result.map((nft: accountNft, index: number) => {
            const nftMetadata = nft.metadata ? JSON.parse(nft.metadata) : null;
            return (
              <div key={index} className="vsto-view-wallet-collection-image">
                <img src={parseNftImage(nftMetadata)} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ViewWallet;

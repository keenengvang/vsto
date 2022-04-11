import { Grid } from '@adobe/react-spectrum';
import { repeat } from '@adobe/react-spectrum';
import { ProgressCircle, View } from '@adobe/react-spectrum';
import { motion } from 'framer-motion';
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

  function Gallery() {
    return (
      <Grid
        columns={repeat('auto-fit', 'size-3000')}
        autoRows="size-3000"
        justifyContent="center"
        gap="size-300"
      >
        {accountWalletResults?.result &&
          accountWalletResults.result.map((nft: accountNft, index: number) => {
            const nftMetadata = nft.metadata ? JSON.parse(nft.metadata) : null;
            return (
              <motion.div
                key={index}
                className="vsto-view-wallet-collection-image"
                whileHover={{ scale: 1.1 }}
              >
                <img src={parseNftImage(nftMetadata)} />
              </motion.div>
            );
          })}
      </Grid>
    );
  }

  useEffect(() => {
    // TODO: Check Redux Store and if none then call nfts from wallet
    if (isInitialized) {
      getWalletNFTs(params.id);
    }
  }, [isInitialized]);

  return (
    <div className="vsto-view-wallet">
      <View isHidden={loading}>
        My NFT Collection: <b>{params.id}</b>
      </View>
      <ProgressCircle
        isHidden={!loading}
        aria-label="Loading…"
        isIndeterminate
      />
      <div className="vsto-view-wallet-collection">
        <Gallery />
      </div>
    </div>
  );
}

export default ViewWallet;

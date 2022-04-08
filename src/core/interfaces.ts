export interface accountNft {
  token_address?: string | undefined;
  token_id?: string | undefined;
  contract_type?: string | undefined;
  owner_of?: string | undefined;
  block_number?: string | undefined;
  block_number_minted?: string | undefined;
  token_uri?: string | undefined;
  metadata?: string | undefined;
  synced_at?: string | undefined;
  amount?: string | undefined;
  name?: string | undefined;
  symbol?: string | undefined;
}

export interface accountNftList {
  status?: string | undefined;
  total?: number | undefined;
  page?: number | undefined;
  page_size?: number | undefined;
  result?: accountNft[] | undefined;
}

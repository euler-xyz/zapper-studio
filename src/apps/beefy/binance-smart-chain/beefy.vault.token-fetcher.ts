import { Injectable } from '@nestjs/common';

import { Network } from '~types/network.interface';

import { BEEFY_DEFINITION } from '../beefy.definition';
import { BeefyVaultTokenFetcher } from '../common/beefy.vault-token-fetcher';

@Injectable()
export class BinanceSmartChainBeefyVaultTokenFetcher extends BeefyVaultTokenFetcher {
  appId = BEEFY_DEFINITION.id;
  groupId = BEEFY_DEFINITION.groups.vault.id;
  network = Network.BINANCE_SMART_CHAIN_MAINNET;
  groupLabel = 'Vaults';
}
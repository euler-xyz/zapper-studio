import { Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { buildDollarDisplayItem } from '~app-toolkit/helpers/presentation/display-item.present';
import { getImagesFromToken, getLabelFromToken } from '~app-toolkit/helpers/presentation/image.present';
import { ContractType } from '~position/contract.interface';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { ContractPosition } from '~position/position.interface';
import { claimable, supplied } from '~position/position.utils';
import { Network } from '~types/network.interface';

import { UMAMI_DEFINITION } from '../umami.definition';

const appId = UMAMI_DEFINITION.id;
const groupId = UMAMI_DEFINITION.groups.marinate.id;
const network = Network.ARBITRUM_MAINNET;

@Register.ContractPositionFetcher({ appId, groupId, network })
export class ArbitrumUmamiMarinateContractPositionFetcher implements PositionFetcher<ContractPosition> {
  constructor(@Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit) {}

  async getPositions() {
    const wETH_ADDRESS = '0x82af49447d8a07e3bd95bd0d56f35241523fbab1';
    const mUMAMI_ADDRESS = '0x2adabd6e8ce3e82f52d9998a7f64a90d294a92a4';

    const baseTokens = await this.appToolkit.getBaseTokenPrices(network);
    const appTokens = await this.appToolkit.getAppTokenPositions({
      appId: UMAMI_DEFINITION.id,
      groupIds: [UMAMI_DEFINITION.groups.marinate.id],
      network,
    });

    const allTokens = [...baseTokens, ...appTokens];
    const stakedToken = allTokens.find(v => v.address === mUMAMI_ADDRESS);
    const rewardToken = allTokens.find(v => v.address === wETH_ADDRESS);

    if (!stakedToken || !rewardToken) return [];

    const tokens = [supplied(stakedToken), claimable(rewardToken)];
    const label = getLabelFromToken(stakedToken);
    const images = getImagesFromToken(stakedToken);
    const secondaryLabel = buildDollarDisplayItem(stakedToken.price);

    const position: ContractPosition = {
      type: ContractType.POSITION,
      appId,
      groupId,
      address: mUMAMI_ADDRESS,
      network,
      tokens,
      displayProps: {
        label,
        secondaryLabel,
        images,
      },
      dataProps: {},
    };

    return [position];
  }
}
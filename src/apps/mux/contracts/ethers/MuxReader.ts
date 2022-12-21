/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export declare namespace Reader {
  export type PoolStorageStruct = {
    shortFundingBaseRate8H: PromiseOrValue<BigNumberish>;
    shortFundingLimitRate8H: PromiseOrValue<BigNumberish>;
    fundingInterval: PromiseOrValue<BigNumberish>;
    liquidityBaseFeeRate: PromiseOrValue<BigNumberish>;
    liquidityDynamicFeeRate: PromiseOrValue<BigNumberish>;
    mlpPriceLowerBound: PromiseOrValue<BigNumberish>;
    mlpPriceUpperBound: PromiseOrValue<BigNumberish>;
    lastFundingTime: PromiseOrValue<BigNumberish>;
    sequence: PromiseOrValue<BigNumberish>;
    strictStableDeviation: PromiseOrValue<BigNumberish>;
  };

  export type PoolStorageStructOutput = [
    number,
    number,
    number,
    number,
    number,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
  ] & {
    shortFundingBaseRate8H: number;
    shortFundingLimitRate8H: number;
    fundingInterval: number;
    liquidityBaseFeeRate: number;
    liquidityDynamicFeeRate: number;
    mlpPriceLowerBound: BigNumber;
    mlpPriceUpperBound: BigNumber;
    lastFundingTime: number;
    sequence: number;
    strictStableDeviation: number;
  };

  export type AssetStorageStruct = {
    symbol: PromiseOrValue<BytesLike>;
    tokenAddress: PromiseOrValue<string>;
    muxTokenAddress: PromiseOrValue<string>;
    id: PromiseOrValue<BigNumberish>;
    decimals: PromiseOrValue<BigNumberish>;
    flags: PromiseOrValue<BigNumberish>;
    initialMarginRate: PromiseOrValue<BigNumberish>;
    maintenanceMarginRate: PromiseOrValue<BigNumberish>;
    positionFeeRate: PromiseOrValue<BigNumberish>;
    minProfitRate: PromiseOrValue<BigNumberish>;
    minProfitTime: PromiseOrValue<BigNumberish>;
    maxLongPositionSize: PromiseOrValue<BigNumberish>;
    maxShortPositionSize: PromiseOrValue<BigNumberish>;
    spotWeight: PromiseOrValue<BigNumberish>;
    longFundingBaseRate8H: PromiseOrValue<BigNumberish>;
    longFundingLimitRate8H: PromiseOrValue<BigNumberish>;
    referenceOracleType: PromiseOrValue<BigNumberish>;
    referenceOracle: PromiseOrValue<string>;
    referenceDeviation: PromiseOrValue<BigNumberish>;
    halfSpread: PromiseOrValue<BigNumberish>;
    longCumulativeFundingRate: PromiseOrValue<BigNumberish>;
    shortCumulativeFunding: PromiseOrValue<BigNumberish>;
    spotLiquidity: PromiseOrValue<BigNumberish>;
    totalLongPosition: PromiseOrValue<BigNumberish>;
    totalShortPosition: PromiseOrValue<BigNumberish>;
    averageLongPrice: PromiseOrValue<BigNumberish>;
    averageShortPrice: PromiseOrValue<BigNumberish>;
    collectedFee: PromiseOrValue<BigNumberish>;
    deduct: PromiseOrValue<BigNumberish>;
  };

  export type AssetStorageStructOutput = [
    string,
    string,
    string,
    number,
    number,
    BigNumber,
    number,
    number,
    number,
    number,
    number,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    number,
    string,
    number,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
  ] & {
    symbol: string;
    tokenAddress: string;
    muxTokenAddress: string;
    id: number;
    decimals: number;
    flags: BigNumber;
    initialMarginRate: number;
    maintenanceMarginRate: number;
    positionFeeRate: number;
    minProfitRate: number;
    minProfitTime: number;
    maxLongPositionSize: BigNumber;
    maxShortPositionSize: BigNumber;
    spotWeight: number;
    longFundingBaseRate8H: number;
    longFundingLimitRate8H: number;
    referenceOracleType: number;
    referenceOracle: string;
    referenceDeviation: number;
    halfSpread: number;
    longCumulativeFundingRate: BigNumber;
    shortCumulativeFunding: BigNumber;
    spotLiquidity: BigNumber;
    totalLongPosition: BigNumber;
    totalShortPosition: BigNumber;
    averageLongPrice: BigNumber;
    averageShortPrice: BigNumber;
    collectedFee: BigNumber;
    deduct: BigNumber;
  };

  export type DexStorageStruct = {
    dexId: PromiseOrValue<BigNumberish>;
    dexType: PromiseOrValue<BigNumberish>;
    assetIds: PromiseOrValue<BigNumberish>[];
    assetWeightInDEX: PromiseOrValue<BigNumberish>[];
    totalSpotInDEX: PromiseOrValue<BigNumberish>[];
    dexWeight: PromiseOrValue<BigNumberish>;
    dexLPBalance: PromiseOrValue<BigNumberish>;
    liquidityBalance: PromiseOrValue<BigNumberish>[];
  };

  export type DexStorageStructOutput = [
    number,
    number,
    number[],
    number[],
    BigNumber[],
    number,
    BigNumber,
    BigNumber[],
  ] & {
    dexId: number;
    dexType: number;
    assetIds: number[];
    assetWeightInDEX: number[];
    totalSpotInDEX: BigNumber[];
    dexWeight: number;
    dexLPBalance: BigNumber;
    liquidityBalance: BigNumber[];
  };

  export type ChainStorageStruct = {
    pool: Reader.PoolStorageStruct;
    assets: Reader.AssetStorageStruct[];
    dexes: Reader.DexStorageStruct[];
    liquidityLockPeriod: PromiseOrValue<BigNumberish>;
    marketOrderTimeout: PromiseOrValue<BigNumberish>;
    maxLimitOrderTimeout: PromiseOrValue<BigNumberish>;
    lpDeduct: PromiseOrValue<BigNumberish>;
    stableDeduct: PromiseOrValue<BigNumberish>;
    isPositionOrderPaused: PromiseOrValue<boolean>;
    isLiquidityOrderPaused: PromiseOrValue<boolean>;
  };

  export type ChainStorageStructOutput = [
    Reader.PoolStorageStructOutput,
    Reader.AssetStorageStructOutput[],
    Reader.DexStorageStructOutput[],
    number,
    number,
    number,
    BigNumber,
    BigNumber,
    boolean,
    boolean,
  ] & {
    pool: Reader.PoolStorageStructOutput;
    assets: Reader.AssetStorageStructOutput[];
    dexes: Reader.DexStorageStructOutput[];
    liquidityLockPeriod: number;
    marketOrderTimeout: number;
    maxLimitOrderTimeout: number;
    lpDeduct: BigNumber;
    stableDeduct: BigNumber;
    isPositionOrderPaused: boolean;
    isLiquidityOrderPaused: boolean;
  };

  export type SubAccountStateStruct = {
    collateral: PromiseOrValue<BigNumberish>;
    size: PromiseOrValue<BigNumberish>;
    lastIncreasedTime: PromiseOrValue<BigNumberish>;
    entryPrice: PromiseOrValue<BigNumberish>;
    entryFunding: PromiseOrValue<BigNumberish>;
  };

  export type SubAccountStateStructOutput = [BigNumber, BigNumber, number, BigNumber, BigNumber] & {
    collateral: BigNumber;
    size: BigNumber;
    lastIncreasedTime: number;
    entryPrice: BigNumber;
    entryFunding: BigNumber;
  };
}

export interface MuxReaderInterface extends utils.Interface {
  functions: {
    'deductWhiteList(uint256)': FunctionFragment;
    'dex()': FunctionFragment;
    'getChainStorage()': FunctionFragment;
    'getErc20Balances(address[],address)': FunctionFragment;
    'getOrders(uint64[])': FunctionFragment;
    'getSubAccounts(bytes32[])': FunctionFragment;
    'getSubAccountsAndOrders(bytes32[],uint64[])': FunctionFragment;
    'mlp()': FunctionFragment;
    'orderBook()': FunctionFragment;
    'pool()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'deductWhiteList'
      | 'dex'
      | 'getChainStorage'
      | 'getErc20Balances'
      | 'getOrders'
      | 'getSubAccounts'
      | 'getSubAccountsAndOrders'
      | 'mlp'
      | 'orderBook'
      | 'pool',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'deductWhiteList', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'dex', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getChainStorage', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getErc20Balances',
    values: [PromiseOrValue<string>[], PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'getOrders', values: [PromiseOrValue<BigNumberish>[]]): string;
  encodeFunctionData(functionFragment: 'getSubAccounts', values: [PromiseOrValue<BytesLike>[]]): string;
  encodeFunctionData(
    functionFragment: 'getSubAccountsAndOrders',
    values: [PromiseOrValue<BytesLike>[], PromiseOrValue<BigNumberish>[]],
  ): string;
  encodeFunctionData(functionFragment: 'mlp', values?: undefined): string;
  encodeFunctionData(functionFragment: 'orderBook', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pool', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'deductWhiteList', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'dex', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getChainStorage', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getErc20Balances', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getOrders', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getSubAccounts', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getSubAccountsAndOrders', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mlp', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'orderBook', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pool', data: BytesLike): Result;

  events: {};
}

export interface MuxReader extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MuxReaderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    deductWhiteList(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    dex(overrides?: CallOverrides): Promise<[string]>;

    getChainStorage(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    getErc20Balances(
      tokens: PromiseOrValue<string>[],
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]] & { balances: BigNumber[] }>;

    getOrders(
      orderIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<
      [[string, string, string][], boolean[]] & {
        orders: [string, string, string][];
        isExist: boolean[];
      }
    >;

    getSubAccounts(
      subAccountIds: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides,
    ): Promise<
      [Reader.SubAccountStateStructOutput[]] & {
        subAccounts: Reader.SubAccountStateStructOutput[];
      }
    >;

    getSubAccountsAndOrders(
      subAccountIds: PromiseOrValue<BytesLike>[],
      orderIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<
      [Reader.SubAccountStateStructOutput[], [string, string, string][], boolean[]] & {
        subAccounts: Reader.SubAccountStateStructOutput[];
        orders: [string, string, string][];
        isOrderExist: boolean[];
      }
    >;

    mlp(overrides?: CallOverrides): Promise<[string]>;

    orderBook(overrides?: CallOverrides): Promise<[string]>;

    pool(overrides?: CallOverrides): Promise<[string]>;
  };

  deductWhiteList(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  dex(overrides?: CallOverrides): Promise<string>;

  getChainStorage(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  getErc20Balances(
    tokens: PromiseOrValue<string>[],
    owner: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  getOrders(
    orderIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides,
  ): Promise<
    [[string, string, string][], boolean[]] & {
      orders: [string, string, string][];
      isExist: boolean[];
    }
  >;

  getSubAccounts(
    subAccountIds: PromiseOrValue<BytesLike>[],
    overrides?: CallOverrides,
  ): Promise<Reader.SubAccountStateStructOutput[]>;

  getSubAccountsAndOrders(
    subAccountIds: PromiseOrValue<BytesLike>[],
    orderIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides,
  ): Promise<
    [Reader.SubAccountStateStructOutput[], [string, string, string][], boolean[]] & {
      subAccounts: Reader.SubAccountStateStructOutput[];
      orders: [string, string, string][];
      isOrderExist: boolean[];
    }
  >;

  mlp(overrides?: CallOverrides): Promise<string>;

  orderBook(overrides?: CallOverrides): Promise<string>;

  pool(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    deductWhiteList(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    dex(overrides?: CallOverrides): Promise<string>;

    getChainStorage(overrides?: CallOverrides): Promise<Reader.ChainStorageStructOutput>;

    getErc20Balances(
      tokens: PromiseOrValue<string>[],
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;

    getOrders(
      orderIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<
      [[string, string, string][], boolean[]] & {
        orders: [string, string, string][];
        isExist: boolean[];
      }
    >;

    getSubAccounts(
      subAccountIds: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides,
    ): Promise<Reader.SubAccountStateStructOutput[]>;

    getSubAccountsAndOrders(
      subAccountIds: PromiseOrValue<BytesLike>[],
      orderIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<
      [Reader.SubAccountStateStructOutput[], [string, string, string][], boolean[]] & {
        subAccounts: Reader.SubAccountStateStructOutput[];
        orders: [string, string, string][];
        isOrderExist: boolean[];
      }
    >;

    mlp(overrides?: CallOverrides): Promise<string>;

    orderBook(overrides?: CallOverrides): Promise<string>;

    pool(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    deductWhiteList(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    dex(overrides?: CallOverrides): Promise<BigNumber>;

    getChainStorage(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    getErc20Balances(
      tokens: PromiseOrValue<string>[],
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getOrders(orderIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;

    getSubAccounts(subAccountIds: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<BigNumber>;

    getSubAccountsAndOrders(
      subAccountIds: PromiseOrValue<BytesLike>[],
      orderIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    mlp(overrides?: CallOverrides): Promise<BigNumber>;

    orderBook(overrides?: CallOverrides): Promise<BigNumber>;

    pool(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    deductWhiteList(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getChainStorage(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    getErc20Balances(
      tokens: PromiseOrValue<string>[],
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getOrders(orderIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSubAccounts(
      subAccountIds: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getSubAccountsAndOrders(
      subAccountIds: PromiseOrValue<BytesLike>[],
      orderIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    mlp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    orderBook(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
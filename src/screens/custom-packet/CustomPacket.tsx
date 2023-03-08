import React, {Component} from 'react';
import {
  Text,
  View,
  Alert,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Route, SceneMap, TabBar, TabView} from 'react-native-tab-view';

import colors from '../../theme/colors';
import styles from './CustomPacket.style';
import {CART, ROUTES} from '../../shared/constants';
import {localStrings} from '../../shared/localization';
import Button from '../../shared/components/button/Button';
import CustomModal from '../../shared/components/modal/Modal';
import {arrangeSelectedData, calculateTotalPrice} from './utils';
import {ISelectedItem, ISelectedPadCount} from '../../shared/models';

import Pad from './tabs/pad/Pad';
import Tampon from './tabs/tampon/Tampon';
import DailyPad from './tabs/daily-pad/DailyPad';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IProps {}

interface IState {
  total: string;
  activeTab: number;
  routes: Route[];
  standardPad: number;
  superPad: number;
  superPlusPad: number;
  dailyPad: number;
  superDailyPad: number;
  miniTampon: number;
  standardTampon: number;
  isModalVisible: boolean;
  selectedItems: ISelectedItem[];
  cartItems: ISelectedItem[];
}

class CustomPacket extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      total: '0',
      activeTab: 0,
      routes: ROUTES,
      standardPad: 0,
      superPad: 0,
      superPlusPad: 0,
      dailyPad: 0,
      superDailyPad: 0,
      miniTampon: 0,
      standardTampon: 0,
      isModalVisible: false,
      selectedItems: [],
      cartItems: [],
    };
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems = async () => {
    const value = await AsyncStorage.getItem(CART);

    if (value !== null) {
      const cartItems = JSON.parse(value);
      console.log('cartItems: ', cartItems);
      this.setState({cartItems});
    }
  };

  handleOnUserIcon = () => {
    Alert.alert('User Icon Pressed');
  };

  handleOnMenuIcon = () => {
    Alert.alert('Menu Icon Pressed');
  };

  handleOnSeePacket = () => {
    const {
      standardPad,
      superPad,
      superPlusPad,
      dailyPad,
      superDailyPad,
      miniTampon,
      standardTampon,
    } = this.state;
    const selectedItems = arrangeSelectedData({
      standardPad,
      superPad,
      superPlusPad,
      dailyPad,
      superDailyPad,
      miniTampon,
      standardTampon,
    });
    const totalPrice = calculateTotalPrice(selectedItems);
    this.setState({selectedItems, isModalVisible: true, total: totalPrice});
  };

  handleOnRemoveFromPacket = (name: string) => {
    const {selectedItems} = this.state;
    let filteredItems: ISelectedItem[] = [];

    selectedItems.forEach((item: ISelectedItem) => {
      if (item.name === name) {
        item.padCounts.map((item: ISelectedPadCount) => {
          item.count = 0;
        });
        return;
      }
      filteredItems.push(item);
    });

    this.setState({selectedItems: filteredItems});
  };

  getSelectedPadCounts = (item: ISelectedItem) => {
    return item.padCounts
      .map(padCount => {
        return `${padCount.count} ${padCount.name}`;
      })
      .join(', ');
  };

  handleOnAddToCart = async () => {
    const {selectedItems} = this.state;

    try {
      await AsyncStorage.setItem(CART, JSON.stringify(selectedItems));
      this.setState({
        isModalVisible: false,
        cartItems: selectedItems,
        selectedItems: [],
      });
    } catch (error) {
      console.log('store login data error: ', error);
      return null;
    }
  };

  handleOnCart = () => {
    AsyncStorage.clear();
    this.setState({cartItems: []});
  };

  renderCartIcon = () => {
    return (
      <View style={styles.headerIconContainer}>
        {this.state.cartItems.length > 0 && (
          <View style={styles.itemInCartContainer}>
            <Text style={styles.itemInCart}>1</Text>
          </View>
        )}
        <Feather
          name={'shopping-cart'}
          color={colors.text.black}
          size={24}
          onPress={this.handleOnCart}
        />
      </View>
    );
  };

  renderHeaderIcon = (iconName: string, onPress: () => void) => {
    return (
      <View style={styles.headerIconContainer}>
        <Feather
          name={iconName}
          color={colors.text.black}
          size={24}
          onPress={onPress}
        />
      </View>
    );
  };

  renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerTitle}>{localStrings.beije}</Text>
        </View>
        <View style={styles.headerIconsContainer}>
          {this.renderCartIcon()}
          {this.renderHeaderIcon('user', this.handleOnUserIcon)}
          {this.renderHeaderIcon('menu', this.handleOnMenuIcon)}
        </View>
      </View>
    );
  };

  renderTitleContainer = () => {
    return (
      <View>
        <Text style={styles.titleText}>{localStrings.createOwnPacket}</Text>
        <Text style={styles.descriptionText}>
          {localStrings.createOwnPacketDescription}
        </Text>
      </View>
    );
  };

  renderTabBar = (props: any) => {
    return (
      <TabBar
        {...props}
        activeColor={colors.blue.darkest}
        labelStyle={styles.tabBarLabelStyle}
        style={{backgroundColor: colors.text.white}}
        indicatorStyle={{backgroundColor: colors.blue.darkest}}
      />
    );
  };

  renderPadTab = () => {
    return (
      <Pad
        handleOnStandard={(value: number) => {
          this.setState({standardPad: value});
        }}
        handleOnSuper={(value: number) => {
          this.setState({superPad: value});
        }}
        handleOnSuperPlus={(value: number) => {
          this.setState({superPlusPad: value});
        }}
      />
    );
  };

  renderDailyPadTab = () => {
    return (
      <DailyPad
        handleOnStandard={(value: number) => {
          this.setState({dailyPad: value});
        }}
        handleOnSuper={(value: number) => {
          this.setState({superDailyPad: value});
        }}
      />
    );
  };

  renderTamponTab = () => {
    return (
      <Tampon
        handleOnMini={(value: number) => {
          this.setState({miniTampon: value});
        }}
        handleOnStandard={(value: number) => {
          this.setState({standardTampon: value});
        }}
      />
    );
  };

  renderTabView = () => {
    const {activeTab, routes} = this.state;

    return (
      <View style={styles.tabViewContainer}>
        <TabView
          navigationState={{
            index: activeTab,
            routes: routes,
          }}
          renderScene={SceneMap({
            pad: this.renderPadTab,
            dailyPad: this.renderDailyPadTab,
            tampon: this.renderTamponTab,
          })}
          onIndexChange={index => {
            this.setState({activeTab: index});
          }}
          renderTabBar={this.renderTabBar}
        />
      </View>
    );
  };

  renderSeePacketButton = () => {
    return (
      <Button label={localStrings.seePacket} onPress={this.handleOnSeePacket} />
    );
  };

  onRequestClose = () => {
    this.setState({isModalVisible: false});
  };

  renderModalHeader = () => {
    return (
      <View style={styles.modalHeaderContainer}>
        <Text style={styles.modalTitle}>{localStrings.specialPacket}</Text>
        <TouchableOpacity onPress={this.onRequestClose}>
          <Feather name={'x'} color={colors.text.black} size={24} />
        </TouchableOpacity>
      </View>
    );
  };

  renderDeliveryDescription = () => {
    return (
      <View style={styles.deliveryDescriptionContainer}>
        <EvilIcons name={'refresh'} color={colors.text.black} size={24} />
        <Text style={styles.deliveryDescriptionText}>
          {localStrings.deliveryFrequency}
        </Text>
      </View>
    );
  };

  renderPacketImage = () => {
    return (
      <View style={styles.packetImageContainer}>
        <Image
          source={require('../../assets/packet.png')}
          style={styles.packetImage}
        />
      </View>
    );
  };

  renderSelectedItems = () => {
    const {selectedItems} = this.state;

    return (
      selectedItems.length > 0 && (
        <View style={styles.selectedItemsContainer}>
          {selectedItems.map((item: ISelectedItem, index: number) => {
            return (
              item.padCounts.length > 0 && (
                <View key={index} style={styles.selectedItemContainer}>
                  <Text style={styles.selectedItemTitle}>{item.name}</Text>
                  <Text style={styles.selectedItemDetailText}>
                    {this.getSelectedPadCounts(item)}
                  </Text>
                  <Text
                    style={styles.removeFromPacket}
                    onPress={() => {
                      this.handleOnRemoveFromPacket(item.name);
                    }}>
                    {localStrings.removeFromPacket}
                  </Text>
                </View>
              )
            );
          })}
        </View>
      )
    );
  };

  renderAddToCartButton = () => {
    const {total} = this.state;
    const buttonStyle = total == '0.00' ? styles.disabledButton : {};
    const labelStyle = total == '0.00' ? styles.disabledButtonLabel : {};

    return (
      <Button
        disabled={total == '0.00'}
        label={localStrings.addToCart(this.state.total)}
        onPress={this.handleOnAddToCart}
        buttonStyle={buttonStyle}
        labelStyle={labelStyle}
      />
    );
  };

  renderModalContainer = () => {
    return (
      <ScrollView>
        <View style={styles.modalContainer}>
          {this.renderModalHeader()}
          {this.renderDeliveryDescription()}
          {this.renderPacketImage()}
          {this.renderSelectedItems()}
          {this.renderAddToCartButton()}
        </View>
      </ScrollView>
    );
  };

  renderModal = () => {
    return (
      <CustomModal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}
        onRequestClose={this.onRequestClose}>
        <View style={styles.modalContent}>{this.renderModalContainer()}</View>
      </CustomModal>
    );
  };

  renderContent = () => {
    return (
      <ScrollView style={styles.contentContainer}>
        {this.renderTitleContainer()}
        {this.renderTabView()}
        {this.renderSeePacketButton()}
      </ScrollView>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderModal()}
      </View>
    );
  }
}

export default CustomPacket;

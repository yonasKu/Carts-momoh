import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";

import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Carts = () => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };
  return (
    <ScrollView style={styles.mainContainer}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "flex-end",
          gap: 8,
          //paddingVertical: 16,
        }}
      >
        <MaterialIcons name="storefront" size={12} color="#808080" />
        <Text style={styles.subHeader}>متجر محاميد</Text>
        <AntDesign
          name="checkcircleo"
          size={16}
          color="#203F77"
          style={{ alignSelf: "flex-end" }}
        />
      </View>
      <View style={styles.itemcontainer}>
        <View style={styles.itemsComponent}>
          <View style={styles.innerContainertext}>
            <Text style={styles.subHeader}>
              بلوزة أبيض مع أزرق تركي خامات راقية
            </Text>

            <View style={styles.secondRow}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",

                  width: 40,
                  height: 20,
                  borderRadius: 4,
                  borderWidth: 1,
                  borderColor: "#BBBBBB",
                }}
              >
                <Text style={styles.colorText}>كبير</Text>
              </View>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: "#C04354",
                }}
              ></View>
            </View>

            <View style={styles.thirdRow}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="minus-box-outline"
                    size={22}
                    color="#203F77"
                  />
                </TouchableOpacity>
                <Text style={styles.itemNumbers}>1</Text>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="plus-box-outline"
                    size={22}
                    color="#203F77"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.pricesContainer}>
                <Text style={styles.discountText}>خصم 15% </Text>
                <Text style={styles.mainpriceText}>$40.25</Text>
                <Text style={styles.discountPriceText}>$35</Text>
              </View>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/1234.png")}
              style={{ width: 68, height: 75 }}
            />
          </View>
        </View>
        <View style={styles.ChecklistComponent}>
          <AntDesign name="checkcircleo" size={16} color="#203F77" />
        </View>
      </View>

      <View style={styles.itemcontainer}>
        <View style={styles.itemsComponent}>
          <View style={styles.innerContainertext}>
            <Text style={styles.subHeader}>
              بلوزة أبيض مع أزرق تركي خامات راقية
            </Text>

            <View style={styles.secondRow}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",

                  width: 40,
                  height: 20,
                  borderRadius: 4,
                  borderWidth: 1,
                  borderColor: "#BBBBBB",
                }}
              >
                <Text style={styles.colorText}>كبير</Text>
              </View>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: "#C04354",
                }}
              ></View>
            </View>

            <View style={styles.thirdRow}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="minus-box-outline"
                    size={22}
                    color="#203F77"
                  />
                </TouchableOpacity>
                <Text style={styles.itemNumbers}>1</Text>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="plus-box-outline"
                    size={22}
                    color="#203F77"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.pricesContainer}>
                <Text style={styles.discountText}>خصم 15% </Text>
                <Text style={styles.mainpriceText}>$40.25</Text>
                <Text style={styles.discountPriceText}>$35</Text>
              </View>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/1234.png")}
              style={{ width: 68, height: 75 }}
            />
          </View>
        </View>
        <View style={styles.ChecklistComponent}>
          <AntDesign name="checkcircleo" size={16} color="#203F77" />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 4,
        }}
      >
        <Text style={styles.shippingText}>رسوم التوصيل: 10$</Text>
        <MaterialCommunityIcons
          name="truck-outline"
          size={16}
          color="#04ACD6"
          style={{ alignSelf: "center" }}
        />
      </View>
      <View style={styles.uncheckedListContainer}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "flex-end",
            gap: 8,
            paddingTop: 8,
          }}
        >
          <MaterialIcons name="storefront" size={12} color="#808080" />
          <Text style={styles.subHeader}>متجر محاميد</Text>

          <Entypo name="circle" size={16} color="#203F77" />
        </View>
        <View style={styles.itemcontainer}>
          <View style={styles.itemsComponent}>
            <View style={styles.innerContainertext}>
              <Text style={styles.subHeader}>
                بلوزة أبيض مع أزرق تركي خامات راقية
              </Text>

              <View style={styles.secondRow}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",

                    width: 40,
                    height: 20,
                    borderRadius: 4,
                    borderWidth: 1,
                    borderColor: "#BBBBBB",
                  }}
                >
                  <Text style={styles.colorText}>كبير</Text>
                </View>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    backgroundColor: "#C04354",
                  }}
                ></View>
              </View>

              <View style={styles.thirdRow}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      name="minus-box-outline"
                      size={22}
                      color="#203F77"
                    />
                  </TouchableOpacity>
                  <Text style={styles.itemNumbers}>1</Text>
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      name="plus-box-outline"
                      size={22}
                      color="#203F77"
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.pricesContainer}>
                  <Text style={styles.discountText}>خصم 15% </Text>
                  <Text style={styles.mainpriceText}>$40.25</Text>
                  <Text style={styles.discountPriceText}>$35</Text>
                </View>
              </View>
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/1234.png")}
                style={{ width: 68, height: 75 }}
              />
            </View>
          </View>
          <View style={styles.ChecklistComponent}>
            <Entypo name="circle" size={16} color="#203F77" />
          </View>
        </View>

        {isDetailsVisible && (
          <View style={{ flex: 1, gap: 16 }}>
            <View style={{ gap: 8 }}>
              <View style={{ gap: 12 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity onPress={toggleDetails}>
                    <Entypo name="chevron-thin-down" size={16} color="black" />
                  </TouchableOpacity>
                  <Text style={styles.headerText}>ملاحظة</Text>
                </View>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={styles.descriptionText}>
                      السعر الخاص بالتوصيل يتم حسابه حسب العنوان التي تم تحديده
                      عند تحميل التطبيق ويمكن تغيره من الصفحة القادمة: فلسطين -
                      رفح - رفح الغربية
                    </Text>
                  </View>
                  <AntDesign name="Safety" size={24} color="black" />
                </View>
              </View>
            </View>
            <View style={styles.priceDescriptionContainer}>
              <View style={styles.priceDescriptionBlock}>
                <Text style={styles.priceDescription}>2</Text>
                <Text style={styles.priceDescription}>عدد العناصر</Text>
              </View>
              <View style={styles.priceDescriptionBlock}>
                <Text style={styles.priceDescription}>$70</Text>
                <Text style={styles.priceDescription}>السعر</Text>
              </View>
              <View style={styles.priceDescriptionBlock}>
                <Text style={styles.priceDescription}>$10</Text>
                <Text style={styles.priceDescription}>التوصيل</Text>
              </View>
              <View style={styles.priceDescriptionBlock}>
                <Text style={styles.priceDescription}>$3</Text>
                <Text style={styles.priceDescription}>عمولة مامو</Text>
              </View>
              <View style={styles.finalPriceContainer}>
                <Text style={styles.finalPriceDescription}>$3</Text>
                <Text style={styles.finalPriceDescription}>عمولة مامو</Text>
              </View>
            </View>
          </View>
        )}
        {!isDetailsVisible && (
          <View style={styles.bottomContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <TouchableOpacity onPress={toggleDetails}>
                <Entypo name="chevron-thin-up" size={16} color="black" />
              </TouchableOpacity>
              <View style={styles.summary}>
                <Text>الإجمالي</Text>
                <Text>80</Text>
              </View>
              <TouchableOpacity style={styles.checkoutButton}>
                <Text style={{ color: "white" }}>اتمام عملية الشراء (2)</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {isDetailsVisible && (
          <View style={styles.checkoutButtonContainer}>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={{ color: "white" }}>اتمام عملية الشراء (2)</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Carts;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
    gap: 8,
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 12,

    fontWeight: "400",
    lineHeight: 20,
  },
  productsContainer: {},
  secondRow: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 8,
    gap: 8,
    flexDirection: "row",
  },
  colorText: {
    fontSize: 11,
    color: "#808080",
    fontWeight: "400",
    lineHeight: 16.5,
  },
  thirdRow: {
    marginTop: 8,
    flexDirection: "row",
  },
  pricesContainer: {
    flexDirection: "row",
    flex: 1,
    gap: 4,
    justifyContent: "flex-end",
  },
  discountText: {
    alignSelf: "center",

    fontSize: 10,
    color: "#EA580C",
    fontWeight: "400",
    lineHeight: 18,
  },
  mainpriceText: {
    alignSelf: "center",
    fontSize: 10,
    color: "#9CA3AF",
    fontWeight: "400",
    lineHeight: 18,
  },
  discountPriceText: {
    fontSize: 14,
    color: "#1F2937",
    fontWeight: "700",
    lineHeight: 21,
  },
  itemNumbers: {
    color: "#1E1F3DB2",
    marginHorizontal: 8,
  },
  innerContainertext: {
    flex: 1,
  },
  itemcontainer: { flex: 1, flexDirection: "row", gap: 8, marginBottom: 8 },
  itemsComponent: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 16,
    gap: 8,
  },
  ChecklistComponent: {
    alignItems: "center",
    justifyContent: "center",
  },
  shippingText: {
    color: "#04ACD6",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 20,
  },
  uncheckedListContainer: {},

  headerText: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 26,
    color: "#333333",
    textAlign: "right",
  },
  descriptionText: {
    color: "#808080",
  },
  priceDescriptionContainer: {
    justifyContent: "space-between",
    gap: 20,
  },
  priceDescriptionBlock: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  priceDescription: {
    fontSize: 16,
    color: "#333333",
  },
  finalPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  finalPriceDescription: {
    color: "#333333",
    lineHeight: 26,
    fontSize: 16,
    fontWeight: "700",
  },
  bottomContainer: {
    flexDirection: "row",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 0,
    paddingLeft: 16,
  },
  summary: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  checkoutButtonContainer: {
    padding: 16,
  },
  checkoutButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#203F77",
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 8,
    borderRadius: 8,
  },
});

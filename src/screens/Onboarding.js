import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { ScreenHeight, ScreenWidth } from "../../assets/Shared/shared";
import { colors } from "../../assets/colors";
import { StatusBar } from "expo-status-bar";
import { View, Image } from "react-native";
import { MediumText, RegularText} from "../components/Texts";

//custom components
import MainContainer from "../../assets/Shared/MainContainer";
import KeyboardAvoidingContainer from "../../assets/Shared/KeyboardAvoidingContainer";
import RegularButton from "../components/Buttons/RegularButton";


const {primary, grey} = colors;

const slides = [
    {
        id: '1',
        image: require('../../assets/Images/admin-stress.png'),
        title: 'Welcome, Proprietors',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at lorem non dolor ultricies bibendum.',
    },
    {
        id: '2',
        image: require('../../assets/Images/teacher-student.png'),
        title: 'Empower Teachers & Students',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at lorem non dolor ultricies bibendum.',
    },
    {
        id: '3',
        image: require('../../assets/Images/parent-child.png'),
        title: 'Parent-Child Connection',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at lorem non dolor ultricies bibendum.',
    },
];

const Slide = ({ item }) => {
  return (
    <View style={{ marginVertical: 54, width: ScreenWidth }}>
      <Image source={item.image}
        style={{ height: '55%', resizeMode: 'contain' }}
      />
      <View style={{ marginLeft: -50,}}>
        <MediumText style={{ marginVertical: 55, fontWeight: 900, textAlign: 'center' }}>{item.title}</MediumText>
      </View>
      <View style={{ overflow: 'hidden', height: 86 }}>
        <RegularText style={{ maxWidth: '85%', textAlign: 'center' }}>{item.subtitle}</RegularText>
      </View>
    </View>
  );
};




const Onboarding = () => {
    const [currentSlideIndex, setCurrentSLideIndex] = React.useState(0);
    const ref = React.useRef(null);
    const Header = () => {
        return <View>
            <View style={{flexDirection: 'row',justifyContent:'center'}}>
          
          {slides.map((_,index) => (<View key={index} style={[styles.indicator, currentSlideIndex == index && {
            backgroundColor: colors.primary,
            width: 10
          }]}/>))}
  
          </View>
        </View>
    };

   

    const ButtonSlide = ({ currentSlideIndex, slides, goNextSlide }) => {
      return (
        currentSlideIndex === slides.length - 1 ? 
        <View style={{ height: 50, flexDirection: 'row', justifyContent: 'center' }}>
          <RegularButton style={{ justifyContent: 'center' }}>
            <RegularText style={[{ color: 'white' }, { fontWeight: 'bold' }]}>Get Started</RegularText>
          </RegularButton>
        </View> :
        <View style={{ flexDirection: 'row', justifyContent: 'center'  }}>
          <RegularButton onPress={goNextSlide} style={{ backgroundColor: primary }}><RegularText style={[{ color: 'white' }]}>Next</RegularText></RegularButton>
        </View>
      );
    };
    

    //now, with every change in slide, this will allow for the indicator to switch as well
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX/ScreenWidth);
    setCurrentSLideIndex(currentIndex);
  };

//to go to the next slide with buttons
const goNextSlide = () => {
  const nextSlideIndex = currentSlideIndex +1;
  if(nextSlideIndex != slides.length){
    const offset =  nextSlideIndex * ScreenWidth;
    ref?.current?.scrollToOffset({offset});
    setCurrentSLideIndex(nextSlideIndex);
  };
  
};

//to skip the slides with the skip button
const skipSlides = () => {
  const lastSlideIndex = slides.length - 1;
  const offset = lastSlideIndex * ScreenWidth;
  ref?.current?.scrollToOffset({offset});
  setCurrentSLideIndex(lastSlideIndex);
};

    return (
        <KeyboardAvoidingContainer>  
            <MainContainer>
            <StatusBar style="light" backgroundColor={primary}/>
                <Header/>
      <FlatList    
      ref={ref}
      onMomentumScrollEnd={updateCurrentSlideIndex}
      pagingEnabled
      data={slides} 
      contentContainerStyle={{height: ScreenHeight * 0.70}} 
      horizontal= {true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <Slide item={item}/>} 
      scrollEnabled={false}
      
      /> 
      {/* <ButtonSlide/> */}
      <ButtonSlide currentSlideIndex={currentSlideIndex} slides={slides} goNextSlide={goNextSlide} />

            </MainContainer>
        </KeyboardAvoidingContainer>
    );
    
}

const styles = StyleSheet.create({
    indicator: {
      height: 10,
      width: 10,
      marginHorizontal: 8,
      backgroundColor: grey,
      borderRadius: 10/2,
      marginTop:46
    },
  }
   ); 

   export default Onboarding;
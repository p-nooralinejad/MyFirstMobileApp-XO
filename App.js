import React, { Component } from 'react';

import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

const styles = StyleSheet.create({

  body:{
    backgroundColor: '#292828',
    flex: 1
  },
  space:{
    flex: 0.25,
    color: 'white',
    justifyContent:'center',
    textAlign: 'center',
    alignItems: 'center'
  },
  ExtraMsg:{
    flex:0.25,
    color: 'white',
    fontSize: 20,
    justifyContent:'center',
    textAlign: 'center',
    alignItems: 'center'
  },
  table:{
    flex: 0.5
  },
  cell11:{
    width:117,
    height:117,
    borderRightWidth: 2,
    borderRightColor: 'white',
    justifyContent:'center',
    alignItems: 'center'
  },
  cell12:{
    width:117,
    height:117,
    borderRightWidth: 2,
    borderRightColor: 'white',
    borderLeftWidth: 2,
    borderLeftColor: 'white',
    justifyContent:'center',
    alignItems: 'center'
  },
  cell13:{
    width:120,
    height:117,
    borderLeftWidth: 2,
    borderLeftColor: 'white',
    justifyContent:'center',
    alignItems: 'center'
  },
  cell21:{
    width:117,
    height:117,
    borderRightWidth: 2,
    borderRightColor: 'white',
    borderTopWidth: 2,
    borderTopColor: 'white',
    justifyContent:'center',
    alignItems: 'center'
  },
  cell22:{
    width:117,
    height:117,
    borderRightWidth: 2,
    borderRightColor: 'white',
    borderTopWidth: 2,
    borderTopColor: 'white',
    borderLeftWidth: 2,
    borderLeftColor: 'white',
    justifyContent:'center',
    alignItems: 'center'
  },
  cell23:{
    width:120,
    height:117,
    borderLeftWidth: 2,
    borderLeftColor: 'white',
    borderTopWidth: 2,
    borderTopColor: 'white',
    justifyContent:'center',
    alignItems: 'center'
  },
  cell31:{
    width:117,
    height:100,
    borderRightWidth: 2,
    borderRightColor: 'white',
    borderTopWidth: 2,
    borderTopColor: 'white',
    justifyContent:'center',
    alignItems: 'center'
  },
  cell32:{
    width:117,
    height:100,
    borderRightWidth: 2,
    borderRightColor: 'white',
    borderLeftWidth: 2,
    borderLeftColor: 'white',
    borderTopWidth: 2,
    borderTopColor: 'white',
    justifyContent:'center',
    alignItems: 'center'
  },
  cell33:{
    width:120,
    height:100,
    borderLeftWidth: 2,
    borderLeftColor: 'white',
    borderTopWidth: 2,
    borderTopColor: 'white',
    justifyContent:'center',
    alignItems: 'center'
  },
  cellTxt:{
    color:'white', 
    fontSize:50
  }
});

export default class App extends Component {
  state = {game: 'on', turn: 'X', table: [ [' ',' ',' '] , [' ',' ',' '] , [' ',' ',' '] ], msg: ''};
  changeTurn(){
    if(this.state.turn == 'X'){
      this.setState({turn :'O'});
    }
    else if(this.state.turn == 'O'){
      this.setState({turn :'X'});
    }
  }
  touched(y, x){
    if(this.state.game != 'on')
      return;
    if(this.state.table[y][x] == ' '){
      this.state.table[y][x] = this.state.turn;
      this.changeTurn();
      this.setState({msg: ''});
    }

    else{
      this.setState({msg: 'This position is filled', msgclr: "red"});
    }

  }
  render() {
    return (
      <View style={styles.body}>
        
        <View style={styles.space}>
          <Text style={{color:'white', fontSize:15}}>turn : </Text>
          <Text style={{color:'red', fontSize:30}}>{this.state.turn}</Text>
        </View>
        
        <View style={styles.table}>
          <View style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}}>
            
            <TouchableHighlight onPress={() => this.touched(0, 0)}> 
              <View style={styles.cell11} >
                <Text style={styles.cellTxt}>{this.state.table[0][0]}</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.touched(0, 1)}> 
              <View style={styles.cell12} >
                <Text style={styles.cellTxt}>{this.state.table[0][1]}</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.touched(0, 2)}> 
              <View style={styles.cell13} >
                <Text style={styles.cellTxt}>{this.state.table[0][2]}</Text>
              </View>
            </TouchableHighlight>

          </View>
          <View style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}}>
            
            <TouchableHighlight onPress={() => this.touched(1, 0)}> 
              <View style={styles.cell21} >
                <Text style={styles.cellTxt}>{this.state.table[1][0]}</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.touched(1, 1)}> 
              <View style={styles.cell22} >
                <Text style={styles.cellTxt}>{this.state.table[1][1]}</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.touched(1, 2)}> 
              <View style={styles.cell23} >
                <Text style={styles.cellTxt}>{this.state.table[1][2]}</Text>
              </View>
            </TouchableHighlight>

          </View>
          <View style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}}>
            
            <TouchableHighlight onPress={() => this.touched(2, 0)}> 
              <View style={styles.cell31} >
                <Text style={styles.cellTxt}>{this.state.table[2][0]}</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.touched(2, 1)}> 
              <View style={styles.cell32} >
                <Text style={styles.cellTxt}>{this.state.table[2][1]}</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.touched(2, 2)}> 
              <View style={styles.cell33} >
                <Text style={styles.cellTxt}>{this.state.table[2][2]}</Text>
              </View>
            </TouchableHighlight>

          </View>
        </View>
        
        <View style={styles.ExtraMsg}>
          <Text style={{color: this.state.msgclr, fontSize:20}}>{this.state.msg}</Text>
        </View>

      </View>
    );
  }
}

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, Button } from 'react-native';
import {postBlogs} from '../action'
import {connect} from 'react-redux'


// create a component
class Post extends Component {
  state={
      title:"",
      content:"",
      dt: ""
  }

  DataHora = ()=> {
    var dt = new Date();
    var dia = dt.getDate();
    if (dia< 10) {
        dia  = "0" + dia;
    }
    var mes = dt.getMonth()+ 1;
    if (mes < 10) {
        mes  = "0" + mes;
    }
    var hora = dt.getHours();
    if ( hora < 10) {
        hora  = "0" + hora;
    }
    var minuto = dt.getMinutes();
    if (minuto < 10) {
        minuto  = "0" + minuto;
    }
    var dataAtual = hora + ":" + minuto + " - "+dia+ "/"+mes;
    
    this.state.dt = dataAtual
    return this.state.dt
}



  submit = () =>{
      this.props.postBlogs(this.state.title, this.state.content, this.state.dt)
      this.setState({
          title:'',
          content:'',
          dt: this.DataHora1()
      })
      this.props.navigation.navigate('NavStack')

  }


    render() {
        return (
    <View style={styles.container}>
        <Text>Post</Text>
        <TextInput style={{marginTop:20, height:40, borderColor:'gray', borderWidth:1}} placeholder="title" onChangeText={title => this.setState({title})} value={this.state.title} />
        <TextInput style={{marginTop:20, height:90, borderColor:'gray', borderWidth:1}} placeholder="content" onChangeText={content => this.setState({content})} value={this.state.content} />
        {/*<TextInput style={{marginTop:20, height:90, borderColor:'gray', borderWidth:1}} placeholder="content" onChangeText={dt => this.setState({dt})} value={this.state.dt} />*/}
        <Text>{this.DataHora()}</Text>
        
     <Button title="Submit" onPress={this.submit} />
    
    </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
         padding:30,
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default connect(null, {postBlogs})(Post);
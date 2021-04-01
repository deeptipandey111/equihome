import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Svg } from 'react-native-svg'

export default function Personalprogress () {
  return (
    <View style={PersonalprogressStyles.Personalprogress}>
      <View style={PersonalprogressStyles.Progress}>
        <View style={PersonalprogressStyles.Personal}>
          <View style={PersonalprogressStyles.FloatButton}>
            <Svg id='Bg' />
            <View style={PersonalprogressStyles.Plus}>
              <Svg id='CombinedShape' />
            </View>
          </View>
          <View style={PersonalprogressStyles.Handle}>
            <View style={PersonalprogressStyles.Rectangle2} />
            <View style={PersonalprogressStyles.Shape} />
            <Svg id='Rectangle4' />
            <View style={PersonalprogressStyles.line} />
            <View style={PersonalprogressStyles.LargeTitleTasks}>
              <Text style={PersonalprogressStyles.Today}>
                My Progress
              </Text>
              <Text style={PersonalprogressStyles.1task}>
                3 tasks
              </Text>
            </View>
            <View style={PersonalprogressStyles.Cleanfridgeframe}>
              <View style={PersonalprogressStyles.Rectangle2} />
              <View style={PersonalprogressStyles.Rectangle} />
              <Svg id='List' />
              <Text style={PersonalprogressStyles.Label}>
                Vacuum living room
              </Text>
              <DoneComponent />
            </View>
          </View>
          <View style={PersonalprogressStyles.StatusBar}>
            <View style={PersonalprogressStyles.Battery}>
              <Svg id='Rectangle' />
              <Svg id='CombinedShape' />
              <Svg id='Rectangle' />
            </View>
            <Boolean_operation>
              <Svg id='Wifipath' />
              <Svg id='Wifipath' />
              <Svg id='Wifipath' />
            </Boolean_operation>
            <Boolean_operation>
              <Svg id='Cellular_Connectionpath' />
              <Svg id='Cellular_Connectionpath' />
              <Svg id='Cellular_Connectionpath' />
              <Svg id='Cellular_Connectionpath' />
            </Boolean_operation>
            <View style={PersonalprogressStyles.TimeStyle}>
              <Text style={PersonalprogressStyles.941}>
                9:41
              </Text>
            </View>
          </View>
          <View style={PersonalprogressStyles.HomeIndicator}>
            <Svg id='Rectangle' />
          </View>
          <View style={PersonalprogressStyles.Title2xAccessory}>
            <View style={PersonalprogressStyles.Rectangle2} />
            <View style={PersonalprogressStyles.Rectangle} />
            <Svg id='List' />
            <Text style={PersonalprogressStyles.Label}>
              Dishes
            </Text>
            <View style={PersonalprogressStyles.Group}>
              <Text style={PersonalprogressStyles.Time}>
                Today
              </Text>
              <View style={PersonalprogressStyles.Calendar}>
                <View style={PersonalprogressStyles.Group}>
                  <View style={PersonalprogressStyles.Rectangle5} />
                  <Svg id='Line2' />
                  <Svg id='Line' />
                  <Svg id='Line' />
                </View>
              </View>
            </View>
            <View style={PersonalprogressStyles.Group}>
              <Text style={PersonalprogressStyles.Time}>
                7:00 pm
              </Text>
              <View style={PersonalprogressStyles.Icon}>
                <View style={PersonalprogressStyles.Group}>
                  <Svg id='Oval2' />
                  <Svg id='Line' />
                  <Svg id='Line' />
                  <Svg id='Line' />
                  <Svg id='Line' />
                </View>
              </View>
            </View>
            <View style={PersonalprogressStyles.Edit}>
              <Boolean_operation>
                <Svg id='Path' />
                <Svg id='Path' />
              </Boolean_operation>
            </View>
            <Icon_Delete_2px_Line />
            <InProgressComponent />
          </View>
          <View style={PersonalprogressStyles.trashframe}>
            <View style={PersonalprogressStyles.Rectangle2} />
            <View style={PersonalprogressStyles.Rectangle} />
            <Svg id='List' />
            <Text style={PersonalprogressStyles.Label}>
              Trash
            </Text>
            <ToDotrash />
          </View>
          <View style={PersonalprogressStyles.laundryFrame}>
            <View style={PersonalprogressStyles.Rectangle2} />
            <View style={PersonalprogressStyles.Rectangle} />
            <Svg id='List' />
            <Text style={PersonalprogressStyles.Label}>
              Laundry fold
            </Text>
            <ToDoComponent />
          </View>
          <View style={PersonalprogressStyles.Cleanfridgeframe}>
            <View style={PersonalprogressStyles.Rectangle2} />
            <View style={PersonalprogressStyles.Rectangle} />
            <Svg id='List' />
            <Text style={PersonalprogressStyles.Label}>
              Clean Fridge
            </Text>
            <DoneComponent />
          </View>
        </View>
      </View>
      <View style={PersonalprogressStyles.Progress}>
        <View style={PersonalprogressStyles.Personal}>
          <View style={PersonalprogressStyles.Handle}>
            <View style={PersonalprogressStyles.Rectangle2} />
            <View style={PersonalprogressStyles.Shape} />
            <Svg id='Rectangle4' />
            <View style={PersonalprogressStyles.line} />
            <View style={PersonalprogressStyles.LargeTitleTasks}>
              <Text style={PersonalprogressStyles.Today}>
                My tasks
              </Text>
              <Text style={PersonalprogressStyles.1task}>
                5 tasks
              </Text>
              <View style={PersonalprogressStyles.FloatButton}>
                <Svg id='Bg' />
                <View style={PersonalprogressStyles.Plus}>
                  <Svg id='CombinedShape' />
                </View>
              </View>
            </View>
            <View style={PersonalprogressStyles.Vacuumlivingroom}>
              <View style={PersonalprogressStyles.Rectangle2} />
              <View style={PersonalprogressStyles.Rectangle} />
              <Svg id='List' />
              <Text style={PersonalprogressStyles.Label}>
                Clean fridge
              </Text>
              <DoneComponent />
            </View>
            <View style={PersonalprogressStyles.Group7}>
              <View style={PersonalprogressStyles.List}>
                <View style={PersonalprogressStyles.Group1}>
                  <View style={PersonalprogressStyles.Rectangle3} />
                  <Text style={PersonalprogressStyles.Inbox}>
                    All Family tasks
                  </Text>
                </View>
                <View style={PersonalprogressStyles.allinclusive_1167771}>
                  <View style={PersonalprogressStyles.Icons}>
                    <View style={PersonalprogressStyles.TwoTone}>
                      <View style={PersonalprogressStyles.Places}>
                        <View style={PersonalprogressStyles.TwoTonePlacesallinclusive}>
                          <View style={PersonalprogressStyles.Group}>
                            <Svg id='Path' />
                            <Svg id='PrimaryColor' />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={PersonalprogressStyles.Group1}>
              <View style={PersonalprogressStyles.Rectangle3} />
              <Text style={PersonalprogressStyles.Inbox}>
                View Rewards
              </Text>
              <View style={PersonalprogressStyles.medal_price_sports_trophy_winner_icon_1239321}>
                <View style={PersonalprogressStyles.Layer2}>
                  <Svg id='Vector' />
                </View>
              </View>
            </View>
            <View style={PersonalprogressStyles.Group8}>
              <View style={PersonalprogressStyles.List}>
                <View style={PersonalprogressStyles.Group1}>
                  <View style={PersonalprogressStyles.Rectangle3} />
                  <Text style={PersonalprogressStyles.Inbox}>
                    My Calendar
                  </Text>
                  <View style={PersonalprogressStyles.Calendar}>
                    <Boolean_operation>
                      <View style={PersonalprogressStyles.Rectangle5} />
                      <Svg id='Rectangle5' />
                    </Boolean_operation>
                    <Svg id='Line2' />
                    <Svg id='Line' />
                    <Svg id='Line' />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={PersonalprogressStyles.StatusBar}>
            <View style={PersonalprogressStyles.Battery}>
              <Svg id='Rectangle' />
              <Svg id='CombinedShape' />
              <Svg id='Rectangle' />
            </View>
            <Boolean_operation>
              <Svg id='Wifipath' />
              <Svg id='Wifipath' />
              <Svg id='Wifipath' />
            </Boolean_operation>
            <Boolean_operation>
              <Svg id='Cellular_Connectionpath' />
              <Svg id='Cellular_Connectionpath' />
              <Svg id='Cellular_Connectionpath' />
              <Svg id='Cellular_Connectionpath' />
            </Boolean_operation>
            <View style={PersonalprogressStyles.TimeStyle}>
              <Text style={PersonalprogressStyles.941}>
                9:41
              </Text>
            </View>
          </View>
          <View style={PersonalprogressStyles.HomeIndicator}>
            <Svg id='Rectangle' />
          </View>
          <View style={PersonalprogressStyles.Dishestimed}>
            <View style={PersonalprogressStyles.Rectangle2} />
            <View style={PersonalprogressStyles.Rectangle} />
            <Svg id='List' />
            <Text style={PersonalprogressStyles.Label}>
              Dishes
            </Text>
            <View style={PersonalprogressStyles.Group}>
              <Text style={PersonalprogressStyles.Time}>
                Today
              </Text>
              <View style={PersonalprogressStyles.Calendar}>
                <View style={PersonalprogressStyles.Group}>
                  <View style={PersonalprogressStyles.Rectangle5} />
                  <Svg id='Line2' />
                  <Svg id='Line' />
                  <Svg id='Line' />
                </View>
              </View>
            </View>
            <View style={PersonalprogressStyles.Group}>
              <Text style={PersonalprogressStyles.Time}>
                7:00 pm
              </Text>
              <View style={PersonalprogressStyles.Icon}>
                <View style={PersonalprogressStyles.Group}>
                  <Svg id='Oval2' />
                  <Svg id='Line' />
                  <Svg id='Line' />
                  <Svg id='Line' />
                  <Svg id='Line' />
                </View>
              </View>
            </View>
            <View style={PersonalprogressStyles.Edit}>
              <Boolean_operation>
                <Svg id='Path' />
                <Svg id='Path' />
              </Boolean_operation>
            </View>
            <Icon_Delete_2px_Line />
            <View style={PersonalprogressStyles.InProgressComponent}>
              <View style={PersonalprogressStyles.Icon_Graph_2px_Line}>
                <View style={PersonalprogressStyles.Group}>
                  <View style={PersonalprogressStyles.Group}>
                    <Svg id='Vector' />
                  </View>
                  <Svg id='Vector' />
                </View>
              </View>
              <Text style={PersonalprogressStyles.Label}>
                In 
progress
              </Text>
            </View>
          </View>
          <View style={PersonalprogressStyles.Trash}>
            <View style={PersonalprogressStyles.Rectangle2} />
            <View style={PersonalprogressStyles.Rectangle} />
            <Svg id='List' />
            <Text style={PersonalprogressStyles.Label}>
              Trash
            </Text>
            <View style={PersonalprogressStyles.Unmarked}>

            </View>
          </View>
          <View style={PersonalprogressStyles.Vacuumlivingroom}>
            <View style={PersonalprogressStyles.Rectangle2} />
            <View style={PersonalprogressStyles.Rectangle} />
            <Svg id='List' />
            <Text style={PersonalprogressStyles.Label}>
              Vacuum living room
            </Text>
            <DoneComponent />
          </View>
        </View>
      </View>
      <ToDoComponent />
      <View style={PersonalprogressStyles.2buttons}>
        <Label />
        <Text style={PersonalprogressStyles.Label}>
          Done
        </Text>
      </View>
    </View>
  )
}

const PersonalprogressStyles = StyleSheet.create({
  Personalprogress: {
    margin: '-436 2629',
    backgroundColor: '#ffffff',
  },
  Progress: {
    width: 375,
    height: 812,
  },
  Personal: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  FloatButton: {
    width: 64,
    height: 64,
    margin: '295 704',
  },
  Plus: {
    width: '37.5%',
    height: '37.5%',
    margin: '20 20',
  },
  Handle: {
    width: 375,
    height: 812,
  },
  Rectangle2: {
    width: '100%',
    height: '8%',
    backgroundColor: '#000000',
  },
  Shape: {
    width: '91.47%',
    height: '2.46%',
    margin: '16 44',
    backgroundColor: '#ffffff',
    opacity: 0.8,
  },
  line: {
    width: '9.87%',
    height: '0.62%',
    borderRadius: 3,
    margin: '169 58',
    backgroundColor: '#252a31',
    opacity: 0.2,
  },
  LargeTitleTasks: {
    width: '100%',
    height: '11.82%',
  },
  Today: {
    width: 185,
    height: 41,
    margin: '60 16',
    color: '#ffffff',
    fontFamily: 'SF Pro Display, sans-serif',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 41,
    letterSpacing: 0.32,
  },
  1task: {
    width: 53,
    height: 20,
    margin: '60 60',
    color: '#ffffff',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 16,
    lineHeight: 18.75,
    letterSpacing: -0.32,
    opacity: 0.5,
  },
  Cleanfridgeframe: {
    width: '100%',
    height: '7.39%',
  },
  Rectangle2: {
    width: 375,
    height: 60,
    borderColor: 'transparent',
    borderWidth: 0,
    opacity: 0.3,
  },
  Rectangle: {
    width: 315,
    height: 1,
    margin: '60 59',
    backgroundColor: '#ffffff',
    opacity: 0.2,
  },
  Label: {
    width: 271,
    height: 22,
    margin: '60 19',
    color: '#ffffff',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 18,
    fontWeight: '500',
    textDecorationLine: 'strikethrough',
    lineHeight: 21.09375,
    letterSpacing: -0.36,
  },
  StatusBar: {
    width: 375,
    height: 44,
  },
  Battery: {
    width: '6.49%',
    height: '25.76%',
    margin: '336 17.33333396911621',
  },
  TimeStyle: {
    width: '14.4%',
    height: '47.73%',
    margin: '21 12',
  },
  941: {
    width: '100%',
    height: '85.71%',
    color: '#ffffff',
    borderColor: '#ffffff',
    borderWidth: 0,
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 17.578125,
    letterSpacing: -0.30000003576278683,
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  HomeIndicator: {
    width: 375,
    height: 34,
  },
  Title2xAccessory: {
    width: 375,
    height: 82,
  },
  Rectangle2: {
    width: 375,
    height: 82,
    borderColor: 'transparent',
    borderWidth: 0,
    opacity: 0.3,
  },
  Rectangle: {
    width: 315,
    height: 1,
    margin: '60 81',
    backgroundColor: '#ffffff',
    opacity: 0.2,
  },
  Label: {
    width: 271,
    height: 22,
    margin: '60 19',
    color: '#ffffff',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.09375,
    letterSpacing: -0.36,
  },
  Group: {
    width: 59,
    height: 17,
    margin: '60 46',
  },
  Time: {
    width: 39,
    height: 17,
    margin: '20 0',
    color: '#ffffff',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.40625,
    letterSpacing: -0.33764711022377014,
    opacity: 0.5,
  },
  Calendar: {
    width: 16,
    height: 16,
  },
  Group: {
    width: 12,
    height: 13,
    margin: '2 1',
    opacity: 0.5,
  },
  Rectangle5: {
    width: '100%',
    height: '92.31%',
    borderRadius: 2,
    borderColor: '#ffffff',
    borderWidth: 1,
  },
  Group: {
    width: 74,
    height: 17,
    margin: '131 46',
  },
  Time: {
    width: 54,
    height: 17,
    margin: '20 0',
    color: '#ffffff',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.40625,
    letterSpacing: -0.33764711022377014,
    opacity: 0.5,
  },
  Icon: {
    width: 16,
    height: 16,
  },
  Group: {
    width: 12,
    height: 12,
    margin: '2 2',
    opacity: 0.5,
  },
  Edit: {
    width: 24,
    height: 24,
    margin: '302 17',
  },
  trashframe: {
    width: 375,
    height: 60,
  },
  Rectangle2: {
    width: 375,
    height: 60,
    borderColor: 'transparent',
    borderWidth: 0,
    opacity: 0.3,
  },
  Rectangle: {
    width: 315,
    height: 1,
    margin: '60 59',
    backgroundColor: '#ffffff',
    opacity: 0.2,
  },
  Label: {
    width: 271,
    height: 22,
    margin: '60 19',
    color: '#ffffff',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.09375,
    letterSpacing: -0.36,
  },
  laundryFrame: {
    width: 375,
    height: 60,
  },
  Rectangle2: {
    width: 375,
    height: 60,
    borderColor: 'transparent',
    borderWidth: 0,
    opacity: 0.3,
  },
  Rectangle: {
    width: 315,
    height: 1,
    margin: '60 59',
    backgroundColor: '#ffffff',
    opacity: 0.2,
  },
  Label: {
    width: 271,
    height: 22,
    margin: '60 19',
    color: '#ffffff',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.09375,
    letterSpacing: -0.36,
  },
  Cleanfridgeframe: {
    width: '100%',
    height: '7.39%',
  },
  Rectangle2: {
    width: 375,
    height: 60,
    borderColor: 'transparent',
    borderWidth: 0,
    opacity: 0.3,
  },
  Rectangle: {
    width: 315,
    height: 1,
    margin: '60 59',
    backgroundColor: '#ffffff',
    opacity: 0.2,
  },
  Label: {
    width: 271,
    height: 22,
    margin: '60 19',
    color: '#ffffff',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 18,
    fontWeight: '500',
    textDecorationLine: 'strikethrough',
    lineHeight: 21.09375,
    letterSpacing: -0.36,
  },
  Progress: {
    width: 375,
    height: 812,
  },
  Personal: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  Handle: {
    width: 375,
    height: 812,
  },
  Rectangle2: {
    width: '100%',
    height: '8%',
    backgroundColor: '#000000',
  },
  Shape: {
    width: '91.47%',
    height: '2.46%',
    margin: '16 44',
    backgroundColor: '#ffffff',
    opacity: 0.8,
  },
  line: {
    width: '9.87%',
    height: '0.62%',
    borderRadius: 3,
    margin: '169 58',
    backgroundColor: '#252a31',
    opacity: 0.2,
  },
  LargeTitleTasks: {
    width: '100%',
    height: '11.82%',
  },
  Today: {
    width: 133,
    height: 41,
    margin: '60 16',
    color: '#ffffff',
    fontFamily: 'SF Pro Display, sans-serif',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 41,
    letterSpacing: 0.32,
  },
  1task: {
    width: 52,
    height: 20,
    margin: '60 60',
    color: '#ffffff',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 16,
    lineHeight: 18.75,
    letterSpacing: -0.32,
    opacity: 0.5,
  },
  FloatButton: {
    width: 64,
    height: 64,
    margin: '297 5',
  },
  Plus: {
    width: '37.5%',
    height: '37.5%',
    margin: '20 20',
  },
  Vacuumlivingroom: {
    width: '100%',
    height: '7.39%',
  },
  Rectangle2: {
    width: 375,
    height: 60,
    borderColor: 'transparent',
    borderWidth: 0,
    opacity: 0.3,
  },
  Rectangle: {
    width: 315,
    height: 1,
    margin: '60 59',
    backgroundColor: '#ffffff',
    opacity: 0.2,
  },
  Label: {
    width: 271,
    height: 22,
    margin: '60 19',
    color: '#ffffff',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 18,
    fontWeight: '500',
    textDecorationLine: 'strikethrough',
    lineHeight: 21.09375,
    letterSpacing: -0.36,
  },
  Group7: {
    width: '57.07%',
    height: '6.65%',
    margin: '86 512',
  },
  List: {
    width: '100%',
    height: '100%',
    borderRadius: 500,
  },
  Group1: {
    width: 214,
    height: 54,
  },
  Rectangle3: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    backgroundColor: '#f2f2f2',
  },
  Inbox: {
    width: 120,
    height: 20,
    margin: '76 16',
    color: '#006cff',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 18.75,
    letterSpacing: -0.45823541283607483,
    opacity: 0.9,
  },
  allinclusive_1167771: {
    width: 24,
    height: 12,
    margin: '49 19',
  },
  Icons: {
    width: '100%',
    height: '200%',
  },
  TwoTone: {
    width: '100%',
    height: '100%',
  },
  Places: {
    width: '100%',
    height: '100%',
  },
  TwoTonePlacesallinclusive: {
    width: '100%',
    height: '100%',
  },
  Group: {
    width: '100%',
    height: '100%',
  },
  Group1: {
    width: '62.44%',
    height: '6.65%',
    margin: '86 580',
  },
  Rectangle3: {
    width: '91.4%',
    height: '100%',
    borderRadius: 50,
    backgroundColor: '#f2f2f2',
  },
  Inbox: {
    width: '67.11%',
    height: '37.04%',
    margin: '77 15',
    color: '#006cff',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 18.75,
    letterSpacing: -0.45823541283607483,
    opacity: 0.9,
  },
  medal_price_sports_trophy_winner_icon_1239321: {
    width: '10.25%',
    height: '44.44%',
    margin: '49 13',
  },
  Layer2: {
    width: '88.5%',
    height: '83.41%',
    margin: '1.3799996376037598 2',
  },
  Group8: {
    width: '38.13%',
    height: '6.65%',
    margin: '117 444',
  },
  List: {
    width: '100%',
    height: '100%',
    borderRadius: 500,
  },
  Group1: {
    width: 213,
    height: 54,
    margin: '-30 0',
  },
  Rectangle3: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    backgroundColor: '#f2f2f2',
  },
  Inbox: {
    width: 131.07691955566406,
    height: 20,
    margin: '76 19',
    color: '#006cff',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 18.75,
    letterSpacing: -0.45823541283607483,
    opacity: 0.9,
  },
  Calendar: {
    width: '11.27%',
    height: '44.44%',
    margin: '48 17',
  },
  StatusBar: {
    width: 375,
    height: 44,
  },
  Battery: {
    width: '6.49%',
    height: '25.76%',
    margin: '336 17.33333396911621',
  },
  TimeStyle: {
    width: '14.4%',
    height: '47.73%',
    margin: '21 12',
  },
  941: {
    width: '100%',
    height: '85.71%',
    color: '#ffffff',
    borderColor: '#ffffff',
    borderWidth: 0,
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 17.578125,
    letterSpacing: -0.30000003576278683,
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  HomeIndicator: {
    width: 375,
    height: 34,
  },
  Dishestimed: {
    width: 375,
    height: 82,
  },
  Rectangle2: {
    width: 375,
    height: 82,
    borderColor: 'transparent',
    borderWidth: 0,
    opacity: 0.3,
  },
  Rectangle: {
    width: 315,
    height: 1,
    margin: '60 81',
    backgroundColor: '#ffffff',
    opacity: 0.2,
  },
  Label: {
    width: 271,
    height: 22,
    margin: '60 19',
    color: '#ffffff',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.09375,
    letterSpacing: -0.36,
  },
  Group: {
    width: 59,
    height: 17,
    margin: '60 46',
  },
  Time: {
    width: 39,
    height: 17,
    margin: '20 0',
    color: '#ffffff',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.40625,
    letterSpacing: -0.33764711022377014,
    opacity: 0.5,
  },
  Calendar: {
    width: 16,
    height: 16,
  },
  Group: {
    width: 12,
    height: 13,
    margin: '2 1',
    opacity: 0.5,
  },
  Rectangle5: {
    width: '100%',
    height: '92.31%',
    borderRadius: 2,
    borderColor: '#ffffff',
    borderWidth: 1,
  },
  Group: {
    width: 74,
    height: 17,
    margin: '131 46',
  },
  Time: {
    width: 54,
    height: 17,
    margin: '20 0',
    color: '#ffffff',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.40625,
    letterSpacing: -0.33764711022377014,
    opacity: 0.5,
  },
  Icon: {
    width: 16,
    height: 16,
  },
  Group: {
    width: 12,
    height: 12,
    margin: '2 2',
    opacity: 0.5,
  },
  Edit: {
    width: 24,
    height: 24,
    margin: '302 17',
  },
  InProgressComponent: {
    width: 48,
    height: 34,
    margin: '3 21',
  },
  Icon_Graph_2px_Line: {
    width: '50%',
    height: '70.59%',
    margin: '14 0',
  },
  Group: {
    width: '100%',
    height: '100%',
  },
  Group: {
    width: '66.67%',
    height: '66.67%',
    margin: '2.5 5.5',
  },
  Label: {
    width: 81,
    height: '100%',
    margin: '3 22',
    color: '#fad720',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16.40625,
    letterSpacing: -0.28,
  },
  Trash: {
    width: 375,
    height: 60,
  },
  Rectangle2: {
    width: 375,
    height: 60,
    borderColor: 'transparent',
    borderWidth: 0,
    opacity: 0.3,
  },
  Rectangle: {
    width: 315,
    height: 1,
    margin: '60 59',
    backgroundColor: '#ffffff',
    opacity: 0.2,
  },
  Label: {
    width: 271,
    height: 22,
    margin: '60 19',
    color: '#ffffff',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.09375,
    letterSpacing: -0.36,
  },
  Unmarked: {
    width: 28,
    height: 28,
    margin: '16 16',
  },
  Vacuumlivingroom: {
    width: '100%',
    height: '7.39%',
  },
  Rectangle2: {
    width: 375,
    height: 60,
    borderColor: 'transparent',
    borderWidth: 0,
    opacity: 0.3,
  },
  Rectangle: {
    width: 315,
    height: 1,
    margin: '60 59',
    backgroundColor: '#ffffff',
    opacity: 0.2,
  },
  Label: {
    width: 271,
    height: 22,
    margin: '60 19',
    color: '#ffffff',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 18,
    fontWeight: '500',
    textDecorationLine: 'strikethrough',
    lineHeight: 21.09375,
    letterSpacing: -0.36,
  },
  2buttons: {
    width: 375,
    height: 44,
  },
  Label: {
    width: '11.47%',
    height: '50%',
    margin: '16 11',
    color: '#ffffff',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 18,
    lineHeight: 21.09375,
    letterSpacing: -0.43411770462989807,
  },

})

function Label () {
  return (
    <View style={LabelStyles.Label}>

    </View>
  )
}

const LabelStyles = StyleSheet.create({
  Label: {
    width: 0,
    height: 22,
    margin: '314 11',
  },

})

function InProgressComponent () {
  return (
    <View style={InProgressComponentStyles.InProgressComponent}>
      <View style={InProgressComponentStyles.Icon_Graph_2px_Line}>
        <View style={InProgressComponentStyles.Group}>
          <View style={InProgressComponentStyles.Group}>
            <Svg style={InProgressComponentStyles.Vector} id='Vector' />
          </View>
          <Svg style={InProgressComponentStyles.Vector} id='Vector' />
        </View>
      </View>
      <Text style={InProgressComponentStyles.Label}>
        In progress
      </Text>
    </View>
  )
}

const InProgressComponentStyles = StyleSheet.create({
  InProgressComponent: {
    width: 48,
    height: 34,
    margin: '168 268',
  },
  Icon_Graph_2px_Line: {
    width: '50%',
    height: '70.59%',
    margin: '14 0',
  },
  Group: {
    width: '100%',
    height: '100%',
  },
  Group: {
    width: '66.67%',
    height: '66.67%',
    margin: '2.5 5.5',
  },
  Vector: {
    width: '100%',
    height: '100%',
    borderColor: '#fad720',
    borderWidth: 2,
  },
  Vector: {
    width: '100%',
    height: '100%',
  },
  Label: {
    width: 81,
    height: '50%',
    margin: '-16 24',
    color: '#fad720',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16.40625,
    letterSpacing: -0.28,
  },

})

function DoneComponent () {
  return (
    <View style={DoneComponentStyles.DoneComponent}>
      <View style={DoneComponentStyles.Icon_Check_1px_Line}>
        <Text style={DoneComponentStyles.Label}>
          Done
        </Text>
        <View style={DoneComponentStyles.Group}>
          <View style={DoneComponentStyles.Group}>
            <View style={DoneComponentStyles.Ellipse8} />
            <Svg style={DoneComponentStyles.Vector} id='Vector' />
          </View>
          <Svg style={DoneComponentStyles.Vector} id='Vector' />
        </View>
      </View>
    </View>
  )
}

const DoneComponentStyles = StyleSheet.create({
  DoneComponent: {
    width: 48,
    height: 34,
    margin: '91 268',
  },
  Icon_Check_1px_Line: {
    width: '50%',
    height: '70.59%',
    margin: '12 0',
  },
  Label: {
    width: '200%',
    height: '45.83%',
    margin: '-12 23.999998092651367',
    color: '#d8faeb',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16.40625,
    letterSpacing: -0.28,
    textAlign: 'center',
  },
  Group: {
    width: '100%',
    height: '100%',
  },
  Group: {
    width: '66.67%',
    height: '66.67%',
    margin: '5 4',
  },
  Ellipse8: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    borderColor: 'transparent',
    borderWidth: 1,
  },
  Vector: {
    width: '53.13%',
    height: '35.63%',
    margin: '3.5 5',
    borderColor: '#2c9a31',
    borderWidth: 2.5,
  },
  Vector: {
    width: 24,
    height: 24,
  },

})

function Icon_Delete_2px_Line () {
  return (
    <View style={Icon_Delete_2px_LineStyles.Icon_Delete_2px_Line}>
      <View style={Icon_Delete_2px_LineStyles.Group}>
        <Svg style={Icon_Delete_2px_LineStyles.Vector} id='Vector' />
        <Svg style={Icon_Delete_2px_LineStyles.Vector} id='Vector' />
        <Svg style={Icon_Delete_2px_LineStyles.Vector} id='Vector' />
        <Svg style={Icon_Delete_2px_LineStyles.Vector} id='Vector' />
        <Svg style={Icon_Delete_2px_LineStyles.Vector} id='Vector' />
        <Svg style={Icon_Delete_2px_LineStyles.Vector} id='Vector' />
      </View>
      <Svg style={Icon_Delete_2px_LineStyles.Vector} id='Vector' />
    </View>
  )
}

const Icon_Delete_2px_LineStyles = StyleSheet.create({
  Icon_Delete_2px_Line: {
    width: 24,
    height: 23.99999237060547,
    margin: '139 77',
  },
  Group: {
    width: '83.33%',
    height: '83.33%',
    margin: '2 2',
  },
  Vector: {
    width: 16,
    height: 17,
    margin: '2.0999755859375 3',
    borderColor: '#ffffff',
    borderWidth: 2,
  },
  Vector: {
    width: 20,
    height: 0,
    borderColor: '#ffffff',
    borderWidth: 2,
  },
  Vector: {
    width: 0,
    height: 9,
    margin: '10 7',
    borderColor: '#ffffff',
    borderWidth: 2,
  },
  Vector: {
    width: 0,
    height: 9,
    margin: '13 7',
    borderColor: '#ffffff',
    borderWidth: 2,
  },
  Vector: {
    width: 0,
    height: 9,
    margin: '7 7',
    borderColor: '#ffffff',
    borderWidth: 2,
  },
  Vector: {
    width: 10,
    height: 3,
    margin: '5 0',
    borderColor: '#ffffff',
    borderWidth: 2,
  },
  Vector: {
    width: 24,
    height: 23.99999237060547,
  },

})

function ToDoComponent () {
  return (
    <View style={ToDoComponentStyles.ToDoComponent}>
      <Text style={ToDoComponentStyles.Label}>
        To do
      </Text>
      <View style={ToDoComponentStyles.Ellipse7} />
    </View>
  )
}

const ToDoComponentStyles = StyleSheet.create({
  ToDoComponent: {
    width: 48,
    height: 34,
    margin: '27 268',
  },
  Label: {
    width: '100%',
    height: '34.38%',
    color: '#ffffff',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16.40625,
    letterSpacing: -0.28,
    textAlign: 'center',
  },
  Ellipse7: {
    width: '33.33%',
    height: '47.06%',
    margin: '16 5',
    backgroundColor: '#ffffff',
    borderColor: 'transparent',
    borderWidth: 1,
  },

})
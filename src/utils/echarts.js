export const circleOption1 = {
  title: {
    show: false
  },
  tooltip: {
    trigger: 'item',
    formatter: "{b}: {c} ({d}%)"
  },
  legend: {
    orient: 'horizontal',
    left: 'center',
    top: 'bottom',
    data: ['在线', '离线']
  },
  xAxis: {
    show: false
  },
  yAxis: {
    show: false
  },
  series: [{
    type: 'pie',
    radius: '55%',
    center: ['50%', '50%'],
    color: ['#00FF00', '#FF0000'],
    data: [
      { value: 60, name: '在线' },
      { value: 310, name: '离线' }
    ],
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }],
  resizable: true
}
export const circleOption2 = {
  title: {
    show: false
  },
  tooltip: {
    trigger: 'item',
    formatter: "{b}: {c} ({d}%)"
  },
  legend: {
    orient: 'horizontal',
    left: 'center',
    top: 'bottom',
    data: ['在线', '离线']
  },
  xAxis: {
    show: false
  },
  yAxis: {
    show: false
  },
  series: [{
    type: 'pie',
    radius: '55%',
    center: ['50%', '50%'],
    color: ['#00FF00', '#FF0000'],
    data: [
      { value: 60, name: '在线' },
      { value: 310, name: '离线' }
    ],
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }],
  resizable: true
}
export const circleOption3 = {
  title: {
    show: false
  },
  tooltip: {
    trigger: 'item',
    formatter: "{b}: {c} ({d}%)"
  },
  legend: {
    orient: 'horizontal',
    left: 'center',
    top: 'bottom',
    data: ['在线', '离线']
  },
  xAxis: {
    show: false
  },
  yAxis: {
    show: false
  },
  series: [{
    type: 'pie',
    radius: '55%',
    center: ['50%', '50%'],
    color: ['#00FF00', '#FF0000'],
    data: [
      { value: 80, name: '在线' },
      { value: 210, name: '离线' }
    ],
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }],
  resizable: true
}

export const ringOption1 = {
  tooltip: {
    trigger: 'item',
    formatter: "{b}: {c} ({d}%)"
  },
  legend: {
    orient: 'horizontal',
    left: 'center',
    top: 'bottom',
    height: 80,
    itemHeight: 20,
    itemWidth: 50,
    data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']
  },
  series: [
    {
      type: 'pie',
      center: ['50%', '40%'],
      radius: ['40%', '60%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '28',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      color: ['#01cc00', '#d7c924', '#eb8a15', '#fe0000', '#993365', '#8f4748', '#8f4748'],
      data: [
        { value: 335, name: '优' },
        { value: 310, name: '良' },
        { value: 234, name: '轻度污染' },
        { value: 135, name: '中度污染' },
        { value: 135, name: '重度污染' },
        { value: 148, name: '严重污染' }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
export const ringOption2 = {
  tooltip: {
    trigger: 'item',
    formatter: "{b}: {c} ({d}%)"
  },
  legend: {
    orient: 'horizontal',
    left: 'center',
    top: 'bottom',
    height: 80,
    itemHeight: 20,
    itemWidth: 50,
    data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']
  },
  series: [
    {
      type: 'pie',
      center: ['50%', '40%'],
      radius: ['40%', '60%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '28',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      color: ['#01cc00', '#d7c924', '#eb8a15', '#fe0000', '#993365', '#8f4748', '#8f4748'],
      data: [
        { value: 35, name: '优' },
        { value: 310, name: '良' },
        { value: 234, name: '轻度污染' },
        { value: 1035, name: '中度污染' },
        { value: 135, name: '重度污染' },
        { value: 148, name: '严重污染' }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
export const ringOption3 = {
  tooltip: {
    trigger: 'item',
    formatter: "{b}: {c} ({d}%)"
  },
  legend: {
    orient: 'horizontal',
    left: 'center',
    top: 'bottom',
    height: 80,
    itemHeight: 20,
    itemWidth: 50,
    data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']
  },
  series: [
    {
      type: 'pie',
      center: ['50%', '40%'],
      radius: ['40%', '60%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '28',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      color: ['#01cc00', '#d7c924', '#eb8a15', '#fe0000', '#993365', '#8f4748', '#8f4748'],
      data: [
        { value: 135, name: '优' },
        { value: 310, name: '良' },
        { value: 634, name: '轻度污染' },
        { value: 35, name: '中度污染' },
        { value: 735, name: '重度污染' },
        { value: 148, name: '严重污染' }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
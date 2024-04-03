function solve(data_input_array) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }

    let songs_to_print = []
    let songs_data_array = data_input_array.slice(1, data_input_array.length - 1)
    let type_list = data_input_array[data_input_array.length - 1]

    for (item of songs_data_array) {

        current_item = item.split('_')
        current_song_type = current_item[0]
        current_song_name = current_item[1]
        current_song_time = current_item[2]

        if (type_list === "all" || current_song_type === type_list){
            songs_to_print.push(current_song_name)
        }
    }

    console.log(songs_to_print.join('\n'));
}

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])
    
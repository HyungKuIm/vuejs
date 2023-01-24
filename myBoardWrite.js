const MyBoardWrite = {
    template: `
    <div>
        <table id="list">
            <tr>
                <td>글제목</td>
                <td><input type="text" v-model="title" style="width:90%"></td>
            </tr>
            <tr>
                <td colspan="2"><textarea v-model="content" style="width:100%"></textarea></td>
            </tr>

        </table>
        <button v-on:click="boardList" style="float: right;">목록</button>
        <button v-on:click="boardSave" style="float: right;">저장</button>
    </div>
    `,
    methods: {
        boardList: function() {
            this.$emit('board-list');
        },
        boardSave: function() {
            this.$emit('board-save', this.title, this.content);
        }
    },
    data: function() {
        return {
            title: "",
            content: ""
        }
    }

}
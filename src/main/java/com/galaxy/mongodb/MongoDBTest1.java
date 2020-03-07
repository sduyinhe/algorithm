package com.galaxy.mongodb;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;
import org.bson.Document;

import static com.mongodb.client.model.Filters.regex;

public class MongoDBTest1 {
    public static void main(String[] args) {
        find();
    }

    private static MongoCollection<Document> getCollection(String dbname, String collectionName) {
        MongoClient mongoClient = new MongoClient("192.168.2.81", 27017);
        MongoDatabase mongoDatabase = mongoClient.getDatabase(dbname);
        MongoCollection<Document> mongoCollection = mongoDatabase.getCollection(collectionName);
        return mongoCollection;
    }

    private static void find() {
        Document document = Document.parse("{name:'子晴'}");
        MongoCollection<Document> mongoCollection = getCollection("test", "yhw");
//        MongoCursor<Document> cursor = mongoCollection.find(Filters.eq("aget", 1)).projection(new Document("aget", 1).append("name", 1))
//                .projection(new Document("_id", 0)).iterator();
        //MongoCursor<Document> cursor = mongoCollection.find(regex("name","子晴")).iterator();
        MongoCursor<Document> cursor = mongoCollection.find(document).iterator();
        while (cursor.hasNext()) {
            System.out.println("值为：" + cursor.next().toJson());
        }
    }

    public static void insert() {
        MongoCollection mongoCollection = getCollection("test", "yhw");
        Document document1 = new Document("aget", 1).append("name", "子晴").append("gender", "女");
        Document document2 = new Document("aget", 22).append("name", "晓明").append("gender", "女");
        mongoCollection.insertOne(document1);
        mongoCollection.insertOne(document2);
    }

    public static void update() {
        MongoCollection mongoCollection = getCollection("test", "yhw");
        UpdateResult updateResult = mongoCollection.updateMany(Filters.eq("aget", 1), new Document("$set", new Document("gender", "性别分类")));
        System.out.println("更新成功" + updateResult.toString());
    }

    public static void delete() {
        MongoCollection mongoCollection = getCollection("test", "yhw");
        DeleteResult deleteResult = mongoCollection.deleteOne(new Document("aget", 1));
        System.out.println(deleteResult);
    }


}

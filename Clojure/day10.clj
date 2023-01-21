(ns day10
  (:require [input :refer [f->str]]))

(defn -main [day]
  (let [it (->> day f->str (re-seq #"\d") (map parse-long))]
    (loop [it it, new [], s {:r 0}]
      (cond (= (:r s) 50) (assoc s :part2 (count it))
            (empty? it)
            (recur new [] (cond-> s (= (:r s) 39) (assoc :part1 (count new)) :else (update :r inc)))
            :else
            (let [d (first it), m (take-while #(= % d) it), n (count m)]
              (recur (drop n it) (into new [n d]) s))))))

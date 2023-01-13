(ns day09
  (:require [input :refer [f->str]]
            [clojure.math.combinatorics :refer [permutations]]))

(defn parse [it]
  (reduce
   (fn [m [f _ t d]]
     (let [d (parse-long d)] (-> m (update f assoc t d) (update t assoc f d))))
   {} (->> it (re-seq #"\w+") (partition 4))))

(defn distance [it p]
  (let [[f beg] (case p 1 [min ##Inf] [max 0])]
    (reduce
     (fn [md cx]
       (f md
          (loop [cx (partition 2 1 cx), d 0]
            (cond (nil? cx) d
                  (and (= p 1) (>= d md)) md
                  :else (if-let [nd (get-in it (first cx))]
                          (recur (next cx) (+ d nd))
                          md)))))
     beg (->> it keys permutations))))

(defn -main [day]
  (let [input (->> day f->str parse)
        solve (partial distance input)]
    {:part1 (solve 1) :part2 (solve 2)}))


(comment
  (let [test-input (parse "London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141")]
    (for [[p e] [[1 605] [2 982]]] (= e (distance test-input p))))
  )
